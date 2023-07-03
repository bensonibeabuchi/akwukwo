"use client";
import React from "react";
import { useState } from "react";
import backend from "../backend";
import frontend from "../frontend";
import Link from "next/link";

export default function Coursecontent() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col w-[600px] relative place-items-center mx-auto">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-8 px-16 m-4 w-full font-bold"
      >
        Dropdown
      </button>
      {isOpen && (
        <div className="bg-blue-400 absolute top-20 text-2xl font-bold w-full p-4">
          <ul>
            <li
              className="p-4 relative"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Frontend
              {isOpen && (
                <div>
                  {frontend.map((course) => (
                    <div key={course.id}>
                      <p>{course.title}</p>
                    </div>
                  ))}
                </div>
              )}
            </li>
            <li className="p-4">Backend</li>
            <li className="p-4">Product Design</li>
            <li className="p-4">Data Analysis</li>
          </ul>
        </div>
      )}
    </div>
  );
}
