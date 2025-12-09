'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import Navbar from "@/components/Navbar"
import Image from 'next/image'
import PlyrPlayer from '@/components/PlyrPlayer'
import fivestar from "../../../../public/images/fivestar.png"
import LessonAccordion from '@/components/LessonAccordion'

export default function CoursePage() {
  const { id: courseId } = useParams()
  const [course, setCourse] = useState(null)
  const [lessons, setLessons] = useState([])

  useEffect(() => {
    if (!courseId) return

    const load = async () => {
      try {
        const { data: courseData, error: courseErr } =
          await supabase
            .from('courses')
            .select('*')
            .eq('id', courseId)
            .single()

        if (courseErr) throw courseErr
        setCourse(courseData)

        const { data: lessonsData, error: lessonsErr } =
          await supabase
            .from('lessons')
            .select('*')
            .eq('course_id', courseId)
            .order('created_at', { ascending: true })

        if (lessonsErr) throw lessonsErr
        setLessons(lessonsData || [])

      } catch (err) {
        console.error('LOAD ERROR:', err.message)
      }
    }

    load()
  }, [courseId])


  return (
    <>
      <Navbar />

      {/* Prevent horizontal scroll */}
      <div className="flex bg-white overflow-x-hidden">

        {/* LEFT MAIN AREA */}
        <div className="flex-1">

          {/* Intro Section */}
          <div className="w-full pt-32 bg-foreground">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 py-10 space-y-10 md:space-y-0">

              <div className="text-white md:w-1/2 space-y-3">
                <p className="text-5xl font-bold">{course?.title}</p>
                <p className="text-xl">{course?.description}</p>
                <p className="text-gray-300">Teachers name here</p>
                <p>Lesson duration</p>
                <p>Difficulty</p>

                <Image src={fivestar} width={120} height={120} alt="fivestar" />
              </div>

              <div className="md:w-1/2 h-80 overflow-hidden rounded-xl aspect-video">
                <PlyrPlayer url='https://fpseuxbfvsjpeqxgiffw.supabase.co/storage/v1/object/public/videos/94a61ccf-3c69-422c-847e-5592b36541dc-ucw.MP4'/>

              </div>
            </div>
          </div>

          {/* What You Will Learn */}
          <div className="max-w-4xl mx-auto border my-16 p-8 rounded-xl">
            <h3 className="text-3xl font-semibold mb-6">What you&apos;ll learn</h3>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
              <li>Learn best practices for deploying Node.js applications</li>
              <li>Understand how to structure and modularize code using NPM</li>
              <li>Discover how to build apps with Express.js</li>
              <li>Explore asynchronous programming in Node.js</li>
              <li>Work with file system operations in Node.js</li>
              <li>Understand Node.js for scalable backend apps</li>
            </ul>
          </div>

          {/* Course Content */}
          <div className="max-w-4xl mx-auto p-8 pb-24">
            <h3 className="text-3xl my-8 font-bold">Course Content</h3>

            {lessons.map((lesson) => (
              <LessonAccordion key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </div>

      </div>
    </>
  )
}
