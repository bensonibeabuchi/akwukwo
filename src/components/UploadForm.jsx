'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useUploadLessonVideoMutation, useCreateLessonMutation } from '@/redux/features/api/coursesApi';
import { useGetCoursesQuery } from "@/redux/features/api/coursesApi";
import { useSelector } from "react-redux";

export default function UploadForm({ onUploaded }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [courseId, setCourseId] = useState("");

  const [uploadVideo, { isLoading: uploading }] = useUploadLessonVideoMutation();
  const [createLesson] = useCreateLessonMutation();

  // fetch teacher's courses
  const { data: coursesData, isLoading: loadingCourses } = useGetCoursesQuery();

  // get logged in teacher
  const user = useSelector((state) => state.auth.session?.user);
  console.log("LOGGED IN USER:", user)
  console.log("COURSE DATA IN USER:", coursesData)

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0] ?? null;
    setFile(selected);
    if (selected) setPreview(URL.createObjectURL(selected));
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");
    if (!courseId) return alert("Select a course");

    // 1️⃣ upload to storage
    const { data: uploadedData, error: uploadErr } = await uploadVideo(file);

    if (uploadErr) {
      console.error(uploadErr);
      return alert("Upload failed");
    }

    const { publicUrl } = uploadedData;

    // 2️⃣ insert lesson into Supabase
    const { error: lessonErr } = await createLesson({
      title: file.name,
      file_url: publicUrl,
      course_id: courseId,
      teacher_id: user?.id,
    });

    if (lessonErr) {
      console.error(lessonErr);
      return alert("Failed to save lesson");
    }

    alert("Lesson uploaded!");
    onUploaded && onUploaded({ title: file.name, file_url: publicUrl });
  };

  return (
    <div className="flex flex-col gap-4 h-3/4 overflow-y-scroll">

      {/* Preview */}
      {preview && (
        <div className="border rounded-md mb-4 h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden flex items-center justify-center bg-black">
          {file?.type.startsWith("video") ? (
            <video
              src={preview}
              controls
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <Image
              src={preview}
              alt="preview"
              width={200}
              height={200}
              className="max-h-full max-w-full object-contain rounded-md"
            />
          )}
        </div>
      )}

      {/* File picker */}
      <label className="cursor-pointer border-2 border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center hover:border-blue-500 transition">
        <span>Select image or video</span>
        <input type="file" accept="image/*,video/*" onChange={handleFileChange} className="hidden" />
      </label>

      {/* Course dropdown */}
      <select
        className="border p-2 rounded-md"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
      >
        <option value="">Select a course</option>

        {!loadingCourses && coursesData?.map((c) => (
          <option key={c.id} value={c.id}>{c.title}</option>
        ))}
      </select>

      {/* Upload button */}
      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition disabled:opacity-50"
      >
        {uploading ? "Uploading..." : "Upload Lesson"}
      </button>
    </div>
  );
}
