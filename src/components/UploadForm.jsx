import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import Image from 'next/image'

export default function UploadForm({ courseId, onUploaded }) {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [progress, setProgress] = useState(0)
  const [uploading, setUploading] = useState(false)


  const handleFileChange = (e) => {
    const selected = e.target.files?.[0] ?? null
    setFile(selected)

    // Generate preview
    if (selected) {
      const url = URL.createObjectURL(selected)
      setPreview(url)
    }
  }

  const handleUpload = async () => {
    if (!file) return alert('Select a file first')
    setUploading(true)
    setProgress(0)

    // Safe filename
    const rawName = file.name.replace(/\s+/g, "_")
    const safeName = encodeURIComponent(rawName)
    const filename = `${crypto.randomUUID()}-${safeName}`

    // Custom upload with progress using XMLHttpRequest
    const uploadToSupabase = () =>
      new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(
          "POST",
          `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/videos/${filename}`
        )
        xhr.setRequestHeader(
          "Authorization",
          `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
        )
        xhr.setRequestHeader("x-upsert", "true")

        xhr.upload.addEventListener("progress", (e) => {
          if (e.lengthComputable) {
            const percent = Math.round((e.loaded / e.total) * 100)
            setProgress(percent)
          }
        })

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) resolve(true)
            else reject(xhr.responseText)
          }
        }

        xhr.send(file)
      })

    try {
      await uploadToSupabase()
    } catch (err) {
      console.error("UPLOAD ERROR", err)
      alert("Upload failed.", err.message)
      setUploading(false)
      return
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from("videos")
      .getPublicUrl(filename)

    const publicUrl = urlData.publicUrl
    console.log("PUBLIC URL:", publicUrl)

    // Get teacher
    const { data: { user }} = await supabase.auth.getUser()
    if (!user) return alert("Not logged in")

    // Insert lesson
    const { error: lessonError } = await supabase
      .from("lessons")
      .insert({
        course_id: courseId,
        title: file.name,
        file_url: publicUrl,
        teacher_id: user.id
      })

    if (lessonError) {
      console.error("DB ERROR:", lessonError)
      return alert("DB insert failed: " + lessonError.message)
    }

    alert("Upload successful!")
    setUploading(false)
    setProgress(100)
    onUploaded && onUploaded({ title: file.name, public_url: publicUrl })
  }

  return (
    <div className="flex flex-col gap-4 border rounded-md p-4">

      {/* Preview Box */}
      {preview && (
        <div className="border rounded-md p-2">
          {file?.type.startsWith("video") ? (
            <video src={preview} controls className="w-full rounded-md" />
          ) : (
            <Image src={preview} alt='image' width={100} height={100} className="w-full rounded-md" />
          )}
        </div>
      )}

      {/* File Select */}
      <div className="border hover:scale-105 transition cursor-pointer p-2">
        <input type="file" accept="image/*,video/*" onChange={handleFileChange} />
      </div>

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className="p-2 bg-blue-600 text-white rounded-md"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {/* Progress Bar */}
      {uploading && (
        <div className="w-full bg-gray-300 h-3 rounded-full overflow-hidden">
          <div
            className="bg-green-500 h-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {progress > 0 && !uploading && (
        <div className="text-sm text-gray-700">Upload Complete ({progress}%)</div>
      )}
    </div>
  )
}
