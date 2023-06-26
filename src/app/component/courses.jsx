"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/hash-navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import courses from "../coursedata";
import Image from "next/image";
import dot from "../images/dot.png";
import stars from "../images/fivestar.png";

export default function page() {
  return (
    <div className="w-[1500px] mx-auto">
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={3}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {courses.map((course) => (
            <SwiperSlide className="p-8 bg-white">
              <div>
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
                  <h3 className="text-2xl pt-4 font-semibold">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
