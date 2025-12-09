import { supabaseApi } from "./supabaseApi";
import { supabase } from "@/lib/supabaseClient";

export const coursesApi = supabaseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({

    getCourses: builder.query({
      async queryFn() {
        const { data, error } = await supabase
          .from("courses")
          .select('*')
          .order("created_at", { ascending: false });

        if (error) return { error };
        return { data };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map((c) => ({ type: "Courses", id: c.id })),
              { type: "Courses", id: "LIST" },
            ]
          : [{ type: "Courses", id: "LIST" }],
    }),

    getCourseById: builder.query({
      async queryFn(id) {
        const { data, error } = await supabase
          .from("courses")
          .select("*, teachers(id, full_name)")
          .eq("id", id)
          .maybeSingle();

        if (error) return { error };
        return { data };
      },
      providesTags: (result, error, id) => [{ type: "Courses", id }],
    }),

    uploadLessonVideo: builder.mutation({
      async queryFn(file) {
        try {
          const rawName = file.name.replace(/\s+/g, "_");
          const safeName = encodeURIComponent(rawName);
          const filename = `${crypto.randomUUID()}-${safeName}`;

          const xhrResult = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(
              "POST",
              `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/videos/${filename}`
            );
            xhr.setRequestHeader(
              "Authorization",
              `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
            );
            xhr.setRequestHeader("Content-Type", file.type);
            xhr.setRequestHeader("x-upsert", "true");


            xhr.onload = () => {
              if (xhr.status === 200) resolve({ filename });
              else reject(xhr.responseText);
            };

            xhr.onerror = reject;
            xhr.send(file);
          });

          // get public URL
          const { data: urlData } = supabase.storage
            .from("videos")
            .getPublicUrl(xhrResult.filename);

          return { data: { publicUrl: urlData.publicUrl, fileName: xhrResult.filename } };
        } catch (error) {
          return { error: error.toString() };
        }
      },
    }),

    // 2. Insert Lesson record
    createLesson: builder.mutation({
      async queryFn({ title, course_id, file_url, teacher_id, thumbnail_url }) {
        try {
          const { error } = await supabase.from("lessons").insert({
            title,
            course_id,
            file_url,
            teacher_id,
            thumbnail_url,
          });

          if (error) throw error;

          return { data: true };
        } catch (error) {
          return { error: error.message };
        }
      },
    }),
  }),
});

export const { 
  useGetCoursesQuery, 
  useGetCourseByIdQuery,
  useUploadLessonVideoMutation,
  useCreateLessonMutation, 
} = coursesApi;
