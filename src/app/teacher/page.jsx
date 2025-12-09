'use client'

import Link from 'next/link'

export default function TeacherDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Teacher Dashboard</h1>

      <div className="space-y-4">
        <Link href="/teacher/courses/new" className="btn">
          ➕ Create New Course
        </Link>

        <Link href="/teacher/courses" className="btn">
          📚 Manage Courses
        </Link>
      </div>
    </div>
  )
}