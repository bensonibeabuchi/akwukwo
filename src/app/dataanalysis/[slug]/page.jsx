"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { dataanalysisCourses } from "../page";
import fivestar from "src/app/images/fivestar.png";
import ReactPlayer from "react-player";
import { FaPlayCircle } from "react-icons/fa";

function fetchCourses(params) {
  const subjects = dataanalysisCourses.find(
    (subject) => subject.id === params.slug
  );
  return subjects;
}

export default function Page({ params }) {
  const subjects = fetchCourses(params);

  let topics = [];
  topics = subjects.topics;

  return (
    <div>
      <div className="w-full mx-auto bg-[#286f6b]">
        <div className="w-[1500px] mx-auto grid grid-cols-2 items-center ">
          <div className="pl-24 text-white space-y-2 py-4 ">
            <h2 className="pt-16">{subjects.title}</h2>
            <p className="text-white text-xl w-4/5">{subjects.description}</p>
            <p className="text-gray-400">{subjects.instructor}</p>
            <p>{subjects.duration}</p>
            <p>{subjects.level}</p>
            <Image src={fivestar} width={100} height={100} alt="fivestar" />
            <p className="text-[#286f6b] font-bold text-3xl">₦300,000</p>
          </div>
          <div className="pl-4 pt-8 overflow-clip h-96">
            <ReactPlayer
              url={subjects.video}
              width={550}
              height={300}
              controls={true}
            />
          </div>
        </div>
      </div>
      <div className="w-[1200px] mx-auto border my-16 p-8">
        <h3 className="text-2xl font-semibold p-4">
          What you&apos;ll learn in this class
        </h3>
        <div className="text-lg">
          <table>
            <tbody>
              <tr className="text-left">
                <td className="p-4">
                  <li>
                    Learn best practices for deploying Node.js applications to
                    production environments, including considerations for
                    scalability, performance optimization, and monitoring.
                  </li>
                </td>
                <td className="p-4">
                  <li>
                    Understand how to structure and modularize your Node.js code
                    using modules, and explore tools like NPM for managing
                    external dependencies.
                  </li>
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <li>
                    Discover how to build web applications using popular
                    frameworks like Express.js, leveraging Node.js&apos;s
                    capabilities
                  </li>
                </td>
                <td className="p-4">
                  <li>
                    Explore the power of asynchronous programming in Node.js
                    using callbacks, promises, and async/await and then bla bla
                    bla bla bla bla bla
                  </li>
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <li>
                    Dive into file system operations and learn how to read,
                    write, and manipulate files using the built-in modules
                    provided by Node.js
                  </li>
                </td>
                <td className="p-4">
                  <li>
                    Gain a solid understanding of what Node.js is and its role
                    in building scalable and efficient server-side applications.
                  </li>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-[1200px] mx-auto items-center p-8 pb-24">
        <h3 className="text-3xl my-8 font-bold">Course Content</h3>
        {topics.map((topic) => {
          return (
            <>
              <div className="flex justify-between text-2xl text-[#286f6b] hover:scale-[1.02] font-medium p-8 mb-2 rounded-xl bg-[#a9bab9]">
                <Link
                  href={topic.videoLink}
                  target="_blank"
                  className="visited:text-purple-600"
                >
                  <div className="flex items-center space-x-4">
                    <FaPlayCircle className="text-[#286f6b] text-3xl" />
                    <p className="hover:text-purple-600 hover:underline visited:text-gray-400 cursor-pointer">
                      {topic.topic}
                    </p>
                  </div>
                </Link>
                <div>
                  <p>{topic.duration}</p>
                </div>
              </div>
            </>
          );
        })}

        {/*  */}
      </div>
    </div>
  );
}
