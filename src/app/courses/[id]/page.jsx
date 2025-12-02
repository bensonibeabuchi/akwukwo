'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import VideoPlayer from '@/components/VideoPlayer'

export default function CoursePage(){
  const router = useRouter()
  const { id } = router.query
  const [course, setCourse] = useState(null)
  const [lessons, setLessons] = useState([])
  const [signedUrls, setSignedUrls] = useState({})

  useEffect(() => {
    if (!id) return
    const load = async () => {
      const { data: c } = await supabase.from('courses').select('*').eq('id', id).single()
      setCourse(c)
      const { data: ls } = await supabase.from('lessons').select('*').eq('course_id', id).order('created_at', { ascending:false })
      setLessons(ls || [])
      // For each lesson, fetch a signed URL via server API
      const urls = {}
      for (const lesson of ls || []) {
        const res = await fetch('/api/create-presigned-url', {
          method: 'POST',
          headers: {'content-type':'application/json'},
          body: JSON.stringify({ course_id: id, storage_path: lesson.storage_path, title: lesson.title })
        })
        const json = await res.json()
        if (res.ok) urls[lesson.id] = json.signed_url
      }
      setSignedUrls(urls)
    }
    load()
  }, [id])

  return (
    <div>
      <h2>{course?.title}</h2>
      <p>{course?.description}</p>
      <h3>Lessons</h3>
      {lessons.map(l => (
        <div key={l.id} style={{marginBottom:20}}>
          <h4>{l.title}</h4>
          <VideoPlayer src={signedUrls[l.id]} />
        </div>
      ))}
    </div>
  )
}
