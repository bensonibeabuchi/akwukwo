import { supabaseApi } from "./supabaseApi";

export const lessonsApi = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLessonsForCourse: builder.query({
      async queryFn(courseId) {
        const { data, error } = await supabase
          .from("lessons")
          .select("*")
          .eq("course_id", courseId)
          .order("order_index", { ascending: true });
        if (error) return { error };
        return { data };
      },
      providesTags: (result, err, courseId) =>
        result ? [...result.map((r) => ({ type: "Lesson", id: r.id })), { type: "CourseLessons", id: courseId }] : [],
    }),

    addLesson: builder.mutation({
      async queryFn(lesson) {
        const { data, error } = await supabase.from("lessons").insert(lesson).select().single();
        if (error) return { error };
        return { data };
      },
      invalidatesTags: (result) => result ? [{ type: "CourseLessons", id: result.course_id }] : ["Lessons"]
    }),
  }),
});

export const { useGetLessonsForCourseQuery, useAddLessonMutation } = lessonsApi;
