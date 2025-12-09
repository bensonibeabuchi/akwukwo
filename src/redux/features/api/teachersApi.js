import { supabaseApi } from "./supabaseApi";

export const teachersApi = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTeacherProfile: builder.mutation({
      async queryFn(profile) {
        const { data, error } = await supabase.from("teachers").insert(profile).select().single();
        if (error) return { error };
        return { data };
      },
    }),
  }),
});

export const { useCreateTeacherProfileMutation } = teachersApi;
