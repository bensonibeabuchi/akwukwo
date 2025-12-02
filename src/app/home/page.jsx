'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import CourseCard from '@/components/CourseCard'


export default function Home() {
  const [lessons, setCourses] = useState([])

  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase.from('lessons').select('*').order('created_at', { ascending:false })
      if (error) console.error(error)
      else setCourses(data)
    }
    load()
  }, [])

  return (
    <div className='flex items-center justify-center'>
        <main className="flex w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <h1>This is the Dashboard</h1>

        <div>
      <h1>Akwukwo — Lessons</h1>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:12}}>
        {lessons.map(c => <CourseCard key={c.id} course={c} />)}
      </div>
    </div>


      </main>
    </div>
  )
}
