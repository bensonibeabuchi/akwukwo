import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "@/lib/supabaseClient";

export const loadUserProfile = createAsyncThunk(
  "profile/loadUserProfile",
  async (userId, { rejectWithValue }) => {
    try {
      // try teacher
      const { data: teacher, error: teachErr } = await supabase
        .from("teachers")
        .select("*")
        .eq("user_id", userId)
        .maybeSingle();

      if (teachErr) throw teachErr;
      if (teacher) return { role: "teacher", data: teacher };

      // try student
      const { data: student, error: studentErr } = await supabase
        .from("students")
        .select("*")
        .eq("user_id", userId)
        .maybeSingle();

      if (studentErr) throw studentErr;
      if (student) return { role: "student", data: student };

      return { role: "none", data: null };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    role: null,
    profile: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadUserProfile.fulfilled, (state, action) => {
        state.role = action.payload.role;
        state.profile = action.payload.data;
        state.loading = false;
      })
      .addCase(loadUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default profileSlice.reducer;
