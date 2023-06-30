"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import frontend from "../frontend";
import backend from "../backend";
import productdesign from "../productdesign";
import testimonials from "../testimonial";
import dataanalysis from "../dataanalysis";
import Image from "next/image";

import dot from "../images/dot.png";
import fivestar from "../images/fivestar.png";
import { FaQuoteRight } from "react-icons/fa";
import Link from "next/link";

function getRandomItems() {
  // Load the JSON files
  const frontend = require("../frontend.json");
  const productdesign = require("../productdesign.json");
  const backend = require("../coursedata.json");
  const courses = require("../coursedata.json");
  const dataanalysis = require("../dataanalysis.json");

  // Combine the courses from different JSON files
  const allCourses = [
    ...frontend,
    ...courses,
    ...backend,
    ...dataanalysis,
    ...productdesign,
  ];

  // Select 5 random items from the combined courses
  const randomItems = [];
  while (randomItems.length < 5) {
    const randomIndex = Math.floor(Math.random() * allCourses.length);
    const randomCourse = allCourses[randomIndex];
    randomItems.push(randomCourse);
  }

  return randomItems;
}

export default function page() {
  return (
    <div className="py-16">
      <div className="py-8 w-[1400px] mx-auto">
        <h3 className="text-2xl font-semibold p-4">Featured course</h3>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
            autoplay
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {getRandomItems().map((course) => (
              <SwiperSlide key={1} className="p-8 mb-12 bg-white rounded-xl">
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
                  <div className="col-span-2 pl-8 space-y-2">
                    <h3 className="text-4xl font-semibold">{course.title}</h3>
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
                    <Image
                      src={fivestar}
                      width={200}
                      height={200}
                      alt="rating"
                    />
                    <h2 className="text-[#286f6b]">{course.price}</h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="py-8 w-[1400px] mx-auto">
        <h3 className="text-2xl font-semibold p-4">
          <Link href="/frontend" className="hover:text-[#286f6b]">
            Frontend Developement
          </Link>
        </h3>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={1}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {frontend.map((course) => (
              <SwiperSlide key={1} className="px-16 pb-16">
                <div class="w-[400px] h-[450px] p-4 bg-white rounded-lg flex-col justify-center items-start ">
                  <div className="w-full h-[200px] overflow-clip">
                    <Image
                      src={course.image}
                      width={500}
                      height={800}
                      alt="frontend"
                    />
                  </div>

                  <div class="p-[0px] flex-col justify-start items-start gap-[4px] flex">
                    <div
                      className="w-full text-black text-[24px] truncate font-bold"
                      title={course.title}
                    >
                      {course.title}
                    </div>
                    <div class="text-stone-300 text-[14px] font-medium">
                      {course.instructor}
                    </div>
                    <div class="w-full text-black text-[16px] font-normal">
                      {course.description}
                    </div>
                    <div class="text-teal-700 text-[20px] font-bold">
                      {course.price}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="py-8 w-[1400px] mx-auto">
        <h3 className="text-2xl font-semibold p-4">
          <Link href="/productdesign" className="hover:text-[#286f6b]">
            Product Design
          </Link>
        </h3>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={1}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {productdesign.map((course) => (
              <SwiperSlide key={1} className="px-16 pb-16">
                <div class="w-[400px] h-[450px] p-4 bg-white rounded-lg flex-col justify-center items-start ">
                  <div className="w-full h-[200px] overflow-clip">
                    <Image
                      src={course.image}
                      width={500}
                      height={800}
                      alt="frontend"
                    />
                  </div>

                  <div class="p-[0px] flex-col justify-start items-start gap-[4px] flex">
                    <div
                      className="w-full text-black text-[24px] truncate font-bold"
                      title={course.title}
                    >
                      {course.title}
                    </div>
                    <div class="text-stone-300 text-[14px] font-medium">
                      {course.instructor}
                    </div>
                    <div class="w-full text-black text-[16px] font-normal">
                      {course.description}
                    </div>
                    <div class="text-teal-700 text-[20px] font-bold">
                      {course.price}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="bg-[#12524f]">
        <div className="px-48 w-[1400px] mx-auto text-white">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={1}
            slidesPerView={1}
            navigation
            autoplay
            // pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={1} className="rounded-2xl px-32 p-16 text-white">
                <div>
                  <Image
                    src={fivestar}
                    width={200}
                    height={100}
                    alt="fivestar"
                    className=""
                  />
                  <p className="font-light text-xl overflow-hidden h-32 mt-2">
                    {testimonial.testimonial}
                  </p>
                  <div className="flex justify-between">
                    <div className="flex">
                      <div className="h-12 w-12 rounded-full overflow-hidden bg-green-800">
                        <Image
                          src={testimonial.image}
                          width={100}
                          height={300}
                          alt="testimonial"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mx-4">
                        <p className="col-span-3 text-2xl font-semibold">
                          {testimonial.name}
                        </p>
                        <p className="text-sm">{testimonial.designation}</p>
                      </div>
                    </div>
                    <div className="text-5xl text-[#5a9a97]">
                      <FaQuoteRight />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="py-8 w-[1400px] mx-auto">
        <h3 className="text-2xl font-semibold p-4">
          <Link href="/backend" className="hover:text-[#286f6b]">
            Backend Developement
          </Link>
        </h3>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={1}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {backend.map((course) => (
              <SwiperSlide key={1} className="px-16 pb-16 text">
                <div class="w-[400px] h-[450px] p-4 bg-white rounded-lg flex-col justify-center items-start ">
                  <div className="w-full h-[200px] overflow-clip">
                    <Image
                      src={course.image}
                      width={500}
                      height={800}
                      alt="frontend"
                    />
                  </div>

                  <div class="p-[0px] flex-col justify-start items-start gap-[4px] flex">
                    <div
                      className="w-full text-black text-[24px] truncate font-bold"
                      title={course.title}
                    >
                      {course.title}
                    </div>
                    <div class="text-stone-300 text-[14px] font-medium">
                      {course.instructor}
                    </div>
                    <div class="w-full text-black text-[16px] font-normal">
                      {course.description}
                    </div>
                    <div class="text-teal-700 text-[20px] font-bold">
                      {course.price}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="py-8 w-[1400px] mx-auto">
        <h3 className="text-2xl font-semibold p-4">
          <Link href="/dataanalysis" className="hover:text-[#286f6b]">
            Data Analysis
          </Link>
        </h3>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={1}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {dataanalysis.map((course) => (
              <SwiperSlide key={1} className="px-16 pb-16 text">
                <div class="w-[400px] h-[450px] p-4 bg-white rounded-lg flex-col justify-center items-start ">
                  <div className="w-full h-[200px] overflow-clip">
                    <Image
                      src={course.image}
                      width={500}
                      height={800}
                      alt="frontend"
                    />
                  </div>

                  <div class="p-[0px] flex-col justify-start items-start gap-[4px] flex">
                    <div
                      className="w-full text-black text-[24px] truncate font-bold"
                      title={course.title}
                    >
                      {course.title}
                    </div>
                    <div class="text-stone-300 text-[14px] font-medium">
                      {course.instructor}
                    </div>
                    <div class="w-full text-black text-[16px] font-normal">
                      {course.description}
                    </div>
                    <div class="text-teal-700 text-[20px] font-bold">
                      {course.price}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
