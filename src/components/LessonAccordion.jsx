'use client';
import { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import PlyrPlayer from '@/components/PlyrPlayer';

export default function LessonAccordion({ lesson }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 border rounded-xl bg-[#eef1f1]">

      {/* HEADER */}
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between w-full text-2xl text-[#286f6b] font-medium p-6 hover:bg-[#d9e5e4] rounded-xl"
      >
        <div className="flex items-center space-x-4">
          <FaPlayCircle className="text-3xl" />
          <span className="capitalize">{lesson.title}</span>
        </div>
        <span>{open ? "▲" : "▼"}</span>
      </button>

      {/* BODY */}
      {open && (
        <div className="px-6 pb-6 h-full space-y-4">

          <p>{lesson.description}</p>

          {/* VIDEO WRAPPER */}
        <div className="relative w-full flex justify-center bg-black py-4">
          <div className="max-w-[480px] w-full">
            <PlyrPlayer 
              url={lesson.file_url}
              poster={lesson.file_url || ""}
              className="w-full h-auto"
            />
          </div>
        </div>

        </div>
      )}
    </div>
  );
}
