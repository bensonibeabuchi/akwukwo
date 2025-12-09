import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/slices/authSlice";
import profileReducer from "./features/slices/profileSlice";
import { supabaseApi } from "./features/api/supabaseApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    [supabaseApi.reducerPath]: supabaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
  .concat(supabaseApi.middleware)
});
