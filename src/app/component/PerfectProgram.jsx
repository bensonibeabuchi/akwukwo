"use Client";
import React, { useState } from "react";
import frontend from "../frontend";
import backend from "../backend";
import productdesign from "../productdesign";
import dataanalysis from "../dataanalysis";

import Image from "next/image";
import dot from "../images/dot.png";
import stars from "../images/fivestar.png";
import SlideNavButtons from "./SlideNavButtons";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/hash-navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

function PerfectProgram() {
  const [categoryFilter, setCategoryFilter] = useState("All");

  const handleFilter = (category) => {
    setCategoryFilter(category);
  };
  const allData = [...backend, ...frontend, ...productdesign, ...dataanalysis];

  const filteredCourses = allData.filter(
    (course) => categoryFilter === "All" || course.category === categoryFilter
  );

  return (
    <>
      <div className="py-4 flex flex-row space-x-2">
        <button
          className={`cursor-pointer font-semibold hover:scale-[1.03] text-xl p-4 rounded-2xl ${
            categoryFilter === "All"
              ? "bg-[#fcdc66] text-[#286f6b]"
              : "bg-gray-100 text-[#286f6b]"
          }`}
          onClick={() => handleFilter("All")}
        >
          All courses
        </button>
        <p
          className={`cursor-pointer font-semibold hover:scale-[1.03] text-xl p-4 rounded-2xl ${
            categoryFilter === "frontend"
              ? "bg-[#fcdc66] text-[#286f6b]"
              : "bg-gray-100 text-[#286f6b]"
          }`}
          onClick={() => handleFilter("frontend")}
        >
          Frontend
        </p>
        <p
          className={`cursor-pointer font-semibold hover:scale-[1.03] text-xl p-4 rounded-2xl ${
            categoryFilter === "backend"
              ? "bg-[#fcdc66] text-[#286f6b]"
              : "bg-gray-100 text-[#286f6b]"
          }`}
          onClick={() => handleFilter("backend")}
        >
          Backend
        </p>
        <p
          className={`cursor-pointer font-semibold hover:scale-[1.03] text-xl p-4 rounded-2xl ${
            categoryFilter === "dataanalysis"
              ? "bg-[#fcdc66] text-[#286f6b]"
              : "bg-gray-100 text-[#286f6b]"
          }`}
          onClick={() => handleFilter("dataanalysis")}
        >
          Data Analysis
        </p>
        <p
          className={`cursor-pointer font-semibold hover:scale-[1.03] text-xl p-4 rounded-2xl ${
            categoryFilter === "productdesign"
              ? "bg-[#fcdc66] text-[#286f6b]"
              : "bg-gray-100 text-[#286f6b]"
          }`}
          onClick={() => handleFilter("productdesign")}
        >
          Product Design
        </p>
      </div>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          // navigation
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <div className="absolute top-52 z-50">
            <SlideNavButtons />
          </div>
          {filteredCourses.map((course) => (
            <SwiperSlide key={course.id} className="p-8 mx-auto bg-white">
              <Link href={`/${course.category}/${course.id}`}>
                <div key={course.id} className="md:w-full w-[600px] mx-auto">
                  <div>
                    <Image
                      src={course.image}
                      alt="test"
                      width={800}
                      height={400}
                      className="h-96 mx-auto object-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3
                      className="text-2xl pt-4 font-semibold truncate"
                      title={course.title}
                    >
                      {course.title}
                    </h3>
                    <p
                      className="text-lg truncate font-medium"
                      title={course.description}
                    >
                      {course.description}
                    </p>
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
                    <Image src={stars} width={100} height={200} alt="rating" />
                    <h3 className="text-[#286f6b] text-3xl font-bold">
                      {course.price}
                    </h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default PerfectProgram;
