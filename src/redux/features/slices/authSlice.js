import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "@/lib/supabaseClient";

/**
 * checkSession: read current session
 */
export const checkSession = createAsyncThunk("auth/checkSession", async () => {
  const { data } = await supabase.auth.getSession();
  return data.session ?? null;
});

/**
 * login / signup actions (using email/password)
 */
export const loginWithPassword = createAsyncThunk(
  "auth/loginWithPassword",
  async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data.session;
  }
);

export const signUp = createAsyncThunk("auth/signUp", async ({ email, password }) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  return data;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await supabase.auth.signOut();
  return null;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    session: null,
    user: null,
    loading: true,
    error: null
  },
  reducers: {
    // local reducer to set session when auth listener fires
    setSession(state, action) {
      state.session = action.payload;
      state.user = action.payload?.user ?? null;
      state.loading = false;
    },
    clearSession(state) {
      state.session = null;
      state.user = null;
      state.loading = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkSession.fulfilled, (state, action) => {
        state.session = action.payload;
        state.user = action.payload?.user ?? null;
        state.loading = false;
      })
      .addCase(loginWithPassword.fulfilled, (state, action) => {
        state.session = action.payload;
        state.user = action.payload?.user ?? null;
      })
      .addCase(signUp.fulfilled, (state) => {
        // signUp returns data (user confirmation) but session may be null until confirmed
        state.loading = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.session = null;
        state.user = null;
      });
  },
});

export const { setSession, clearSession } = authSlice.actions;
export default authSlice.reducer;
