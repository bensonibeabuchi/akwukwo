"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import backendhero from "../images/backendhero.png";
import stars from "../images/fivestar.png";
import dot from "../images/dot.png";
import backend from "../backend";

export let backendCourses = [];

backendCourses = backend.slice();

export default async function page() {
  return (
    <div className="mx-auto ">
      <div className="w-full mx-auto pt-32 bg-[#286f6b]">
        <div className="w-[1800px] mx-auto grid grid-cols-2 items-center ">
          <div className="pl-48 pb-16 text-white py-4 ">
            <h1>Backend</h1>
            <h1>Development</h1>
            <p className="text-white py-8 w-4/5 leading-8">
              Harness the immense potential of backend development to drive the
              robust foundation of digital applications. Dive deep into
              server-side programming, database management, and infrastructure
              optimization. Be the architect behind seamless data flow,
              high-performance APIs, and secure backend systems. Join us as we
              unlock the power of backend development and shape the future of
              digital innovation.
            </p>
            <button className="px-6 py-4 hover:bg-white hover:text-green-700 hover:scale-105 hover:transition">
              <Link href="./courses" className="hover:text-[#fcdc66]">
                Browse courses
              </Link>
            </button>
          </div>

          <div className="pb-4">
            <Image src={backendhero} width={500} height={700} alt="heroshot" />
          </div>
        </div>
      </div>
      <div className="py-8 w-[1500px] mx-auto">
        {backend.map((course) => (
          <section key={course.id}>
            <Link href={`/backend/${course.id}`}>
              <div key={course.id} className="p-8 bg-white mb-2">
                <div className="grid grid-cols-3">
                  <div className="">
                    <Image
                      src={course.image}
                      alt="test"
                      width={800}
                      height={400}
                      className="h-96 mx-auto object-none"
                    />
                  </div>
                  <div className="col-span-2 pl-8 space-y-3">
                    <h3 className="text-4xl font-semibold hover:text-[#286f6b]">
                      {course.title}
                    </h3>
                    <p className="text-2xl font-medium">{course.description}</p>
                    <p className="text-lg text-gray-300">
                      By {course.instructor}
                    </p>
                    <div className="flex space-x-2 items-center">
                      <p className="text-lg">{course.duration}</p>
                      <div>
                        <Image src={dot} width={5} height={100} alt="dot" />
                      </div>
                      <p className="text-lg">{course.level}</p>
                    </div>
                    <Image src={stars} width={200} height={200} alt="rating" />
                    <h2 className="text-[#286f6b]">{course.price}</h2>
                    <button className="px-6 py-4 mx-auto hover:bg-[#286f6b] hover:text-[#fcdc66] hover:scale-105 hover:transition cursor-pointer">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
}
