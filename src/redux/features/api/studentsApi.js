import { supabaseApi } from "./supabaseApi";
import { supabase } from "@/lib/supabaseClient";

// createStudentProfile: builder.mutation({
//   async queryFn(profile) {
//     const { data, error } = await supabase
//       .from("students")
//       .insert(profile)
//       .select()
//       .single();
//     if (error) return { error };
//     return { data };
//   },
// }),

export const studentsApi = supabaseApi.injectEndpoints({
  overrideExisting: true, // <-- add this
  endpoints: (builder) => ({
    createStudentWithAuth: builder.mutation({
      async queryFn({ email, password, first_name, last_name }) {
        const { data: authData, error: authError } = await supabase.auth.signUp({ email, password });
        if (authError) return { error: authError };
        const auth_uid = authData.user.id;

        const { data, error } = await supabase
          .from("students")
          .insert({ first_name, last_name, email, auth_uid })
          .select()
          .single();

        if (error) return { error };
        return { data };
      },
    }),

    enrollStudent: builder.mutation({
      async queryFn({ student_id, course_id }) {
        const { data, error } = await supabase
          .from("student_courses")
          .insert({ student_id, course_id })
          .select()
          .single();

        if (error) return { error };
        return { data };
      },
    }),
  }),
});

export const {
  useCreateStudentProfileMutation,
  useCreateStudentWithAuthMutation,
  useEnrollStudentMutation,
} = studentsApi;
