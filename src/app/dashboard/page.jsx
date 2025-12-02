'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import UploadForm from '@/components/UploadForm'
import Image from 'next/image'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [courses, setCourses] = useState([])
  const [uploads, setUploads] = useState([])
  const [loading, setLoading] = useState(true)

  async function loadCourses(userId) {
    try {
      if (!userId) return

      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('teacher', userId)

      if (error) throw error
      setCourses(data || [])
    } catch (err) {
      console.error("LOAD COURSES ERROR:", err.message)
    }
  }

  async function loadUploads(userId) {
    try {
      if (!userId) return

      const { data, error } = await supabase
        .from('lessons')
        .select('*')
        .eq('teacher_id', userId)

      if (error) throw error
      setUploads(data || [])
    } catch (err) {
      console.error("LOAD UPLOADS ERROR:", err.message)
    }
  }

  useEffect(() => {
    async function init() {
      try {
        const { data, error } = await supabase.auth.getUser()
        if (error) throw error

        const u = data.user
        setUser(u)

        await loadCourses(u?.id)
        await loadUploads(u?.id)
      } catch (err) {
        console.error("AUTH ERROR:", err.message)
      } finally {
        setLoading(false)
      }
    }

    init()
  }, [])

  const handleUploaded = (fileData) => {
    setUploads(prev => [...prev, fileData])
  }

  if (loading) return <p>Loading…</p>

  return (
    <div className='flex flex-col gap-4 mt-8 items-center justify-center'>
      <h2 className='font-bold text-2xl'>Dashboard</h2>

      {user ? (
        <>
          <h3>Your courses</h3>
          {courses.length === 0 && <p>No courses yet</p>}
          {courses.map(c => <div key={c.id}>{c.title}</div>)}

          <UploadForm 
            courseId={courses[0]?.id} 
            onUploaded={handleUploaded} 
          />

          <h3>Uploaded files</h3>

          {uploads.map((f, idx) => (
            <div key={idx}>
              <p>{f.title}</p>
              {f.file_url && (
                <Image
                  src={f.file_url}
                  alt={f.title}
                  width={200}
                  height={200}
                />
              )}
            </div>
          ))}
        </>
      ) : (
        <p>Please login first</p>
      )}
    </div>
  )
}
