import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import dot from "../images/dot.png";
import fivestar from "../images/fivestar.png";
import Image from "next/image";

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

export default function Randomslide() {
  return (
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
          <SwiperSlide
            key={course.id}
            className="p-8 mb-12 bg-white rounded-xl"
          >
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
                <p className="text-lg text-gray-300">By {course.instructor}</p>
                <div className="flex space-x-2 items-center">
                  <p className="text-lg">{course.duration}</p>
                  <div>
                    <Image src={dot} width={5} height={100} alt="dot" />
                  </div>
                  <p className="text-lg">{course.level}</p>
                </div>
                <Image src={fivestar} width={200} height={200} alt="rating" />
                <h2 className="text-[#286f6b]">{course.price}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
