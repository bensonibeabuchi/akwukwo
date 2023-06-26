import React from "react";
import Image from "next/image";
import headshot from "./images/hero1.png";
import star from "./images/stars.png";
import hero2 from "./images/hero2.png";
import hero3 from "./images/hero3.png";
import hero4 from "./images/hero3.png";

import Link from "next/link";
import Courses from "./component/courses";
import Testimonials from "./component/testimonials";
import { FaQuoteLeft } from "react-icons/fa";

export default function page() {
  return (
    <div className="bg-[#286f6b] mx-auto">
      <div className="w-[1500px] mx-auto">
        <div className="grid grid-cols-2 items-center ">
          <div className="text-white">
            <h1>Unlock Your Potential</h1>
            <h1>Anytime, Anywhere</h1>
            <p className="text-white py-8 w-4/5 leading-8">
              Welcome to Akwukwo, your gateway to a world of knowledge and
              growth. Explore our diverse range of courses, learn from industry
              experts, and elevate your skills to new heights. Whether you're a
              student, professional, or lifelong learner, we're here to empower
              you on your learning journey. Start exploring today and unlock
              your full potential!
            </p>
            <button className="px-6 py-4 hover:bg-white hover:text-green-700 hover:scale-105 hover:transition">
              <Link href="./courses" className="hover:text-[#fcdc66]">
                Browse courses
              </Link>
            </button>
          </div>
          <div>
            <Image src={headshot} width={1000} height={800} alt="heroshot" />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 pt-16">
        <div className="py-2 mx-auto text-center ">
          <h2 className="p-4">Our Top Courses</h2>
          <nav className="flex mx-auto justify-between pt-4 pb-2 items-center">
            <ul className="flex p-2 mx-auto space-x-16 text-3xl font-medium">
              <li>
                <Link
                  href="/frontend"
                  className="hover:hover:text-[#fcdc66] active:underline"
                >
                  Frontend Developement
                </Link>
              </li>
              <li>
                <Link
                  href="/backend"
                  className="hover:hover:text-[#fcdc66] active:underline"
                >
                  Backend Developement
                </Link>
              </li>
              <li>
                <Link
                  href="/productdesign"
                  className="hover:hover:text-[#fcdc66] active:underline"
                >
                  Product Design
                </Link>
              </li>
              <li>
                <Link
                  href="/dataanalysis"
                  className="hover:hover:text-[#fcdc66] active:underline"
                >
                  Data Analysis
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Courses />
        </div>
        <div className="w-[1500px] mx-auto mt-16">
          <div className="grid grid-cols-2 items-center space-x-8">
            <div>
              <Image src={hero2} width={900} height={900} alt="heroshot" />
            </div>

            <div className="space-y-4 text-[#0a1f1e]">
              <h1>
                Best Education <br /> Platform
              </h1>
              <p className=" py-8 w-3/5 leading-8">
                "Akwukwo is a game-changer in online education. The platform's
                user-friendly interface and comprehensive course materials
                exceeded my expectations. Thanks to Akwukwo, I've gained the
                skills and confidence needed to succeed in today's competitive
                job market."
              </p>
              <button className="px-6 py-4 hover:bg-green-700 hover:text-[#fcdc66] hover:scale-105 hover:transition">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="w-[1500px] mx-auto mt-16">
          <div className="grid grid-cols-2 items-center">
            <div className="space-y-4 pl-24 text-[#0a1f1e] ">
              <h1>
                Our World class <br /> Instructors
              </h1>
              <p className="py-8 w-3/5 leading-8">
                "Akwukwo is a game-changer in online education. The platform's
                user-friendly interface and comprehensive course materials
                exceeded my expectations. Thanks to Akwukwo, I've gained the
                skills and confidence needed to succeed in today's competitive
                job market."
              </p>
              <button className="px-6 py-4 hover:bg-green-700 hover:text-[#fcdc66] hover:scale-105 hover:transition">
                Read More
              </button>
            </div>
            <div>
              <Image src={hero3} width={900} height={900} alt="heroshot" />
            </div>
          </div>
        </div>
        <div className="bg-[#286f6b] h-[800px] p-16 pb-32 flex flex-col text-white mx-auto">
          <div>
            <h2 className="pb-4 text-center">What Our Student Say</h2>
            <p className="italic font-medium mx-auto leading-40 pb-8 w-[600px] text-center">
              "Akwukwo has revolutionized my learning experience. The platform
              offers a wide range of courses with top-notch instructors. I've
              gained valuable skills that have helped me excel in my career.
              Highly recommended!" <br /> Chidinma Nwaneti.
            </p>
          </div>
          <div>
            <Testimonials />
          </div>
        </div>
        <div className="w-[1500px] h-[700px] mx-auto">
          <div className="grid pt-8 grid-cols-2 items-center ">
            <div className="pl-8  space-y-4 mb-4 text-[#0a1f1e] ">
              <h1>Get ready to learn and grow your skill</h1>
              <p className="w-4/5 leading-8">
                "Akwukwo is a game-changer in online education. The platform's
                user-friendly interface and comprehensive course materials
                exceeded my expectations. Thanks to Akwukwo, I've gained the
                skills and confidence needed to succeed in today's competitive
                job market."
              </p>
              <button className="px-6 py-4 hover:bg-green-700 hover:text-[#fcdc66] hover:scale-105 hover:transition">
                <Link href="./courses" className="hover:text-[#fcdc66]">
                  Get started now
                </Link>
              </button>
            </div>
            <div>
              <Image src={hero4} width={1000} height={300} alt="heroshot" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
