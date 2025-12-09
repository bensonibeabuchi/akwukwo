"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useGetCoursesQuery } from "@/redux/features/api/coursesApi";
import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";

export default function Home() {
  const { data: courses, isLoading, isError } = useGetCoursesQuery();

  return (
    <>
      <Navbar/>
      <div className="flex pt-32">
        <Sidebar/>
        <div className="p-8 flex-1">
          <h1 className="text-2xl font-bold mb-6">Akwukwo — Courses staging</h1>
          {isLoading ? <><div>Loading courses...</div>
          </>: <></>}
          {isError ? <><div>No Courses availble yet</div></> : <><div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
            {courses?.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div></>}

        </div>
      </div>
    </>
  );
}
