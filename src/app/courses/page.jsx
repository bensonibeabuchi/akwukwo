"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Pagination, Autoplay } from "swiper";
import frontend from "../frontend";
import backend from "../backend";
import productdesign from "../productdesign";
import testimonials from "../testimonial";
import dataanalysis from "../dataanalysis";
import Image from "next/image";
import fivestar from "../images/fivestar.png";
import { FaQuoteRight } from "react-icons/fa";
import Link from "next/link";
import Randomslide from "../component/Randomslide";
import SlideNavButtons from "./SlideNavButtons";
import SwiperCore from "swiper/core";

SwiperCore.use([Navigation]);

export default function Page() {
  return (
    <div className="py-16">
      <div className="py-8 w-[1400px] mx-auto">
        <h3 className="text-2xl font-semibold p-4">Featured course</h3>
        <div>
          <Randomslide />
        </div>
      </div>
      <div className="py-8 w-[1400px] mx-auto">
        <Link href="/frontend" className="hover:text-[#286f6b]">
          <h3 className="text-2xl font-semibold p-4">Frontend Development</h3>
        </Link>

        <div>
          <Swiper
            spaceBetween={0}
            slidesPerView={3}
            navigation={false}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {frontend.map((course) => (
              <div key={course.id}>
                <SwiperSlide key={course.id} className="px-8 py-16  ">
                  <Link href={`/frontend/${course.id}`}>
                    <div class="w-[400px] mx-auto h-[450px] p-4 bg-white rounded-lg flex-col justify-center items-start ">
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
                  </Link>
                </SwiperSlide>
              </div>
            ))}
            <div className=" absolute top-52 z-50">
              <SlideNavButtons />
            </div>
          </Swiper>
        </div>
      </div>

      <div className="py-8 w-[1400px] mx-auto">
        <Link href="/productdesign" className="hover:text-[#286f6b]">
          <h3 className="text-2xl font-semibold p-4">Product Design</h3>
        </Link>

        <div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={3}
            navigation={false}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {productdesign.map((course) => (
              <div key={course.id}>
                <SwiperSlide key={course.id} className="px-8 py-16  ">
                  <Link href={`/frontend/${course.id}`}>
                    <div class="w-[400px] mx-auto h-[450px] p-4 bg-white rounded-lg flex-col justify-center items-start ">
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
                  </Link>
                </SwiperSlide>
              </div>
            ))}
            <div className=" absolute top-52 z-50">
              <SlideNavButtons />
            </div>
          </Swiper>
        </div>
      </div>
      <div className="bg-[#12524f]">
        <div className="px-48 w-[1500px] mx-auto text-white">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={1}
            slidesPerView={1}
            navigation={false}
            pagination={{ clickable: true }}
            autoplay
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide
                key={1}
                className="rounded-2xl px-32 p-16 text-white"
              >
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
            {/* <div className="absolute  scale-[0.74] right-0 pl-16 p-4 top-32 z-50">
              <SlideNavButtons />
            </div> */}
          </Swiper>
        </div>
      </div>

      <div className="py-8 w-[1400px] mx-auto">
        <Link href="/backend" className="hover:text-[#286f6b]">
          <h3 className="text-2xl font-semibold p-4">Backend Development</h3>
        </Link>

        <div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={3}
            navigation={false}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {backend.map((course) => (
              <div key={course.id}>
                <SwiperSlide key={course.id} className="px-8 py-16  ">
                  <Link href={`/backend/${course.id}`}>
                    <div class="w-[400px] mx-auto h-[450px] p-4 bg-white rounded-lg flex-col justify-center items-start ">
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
                  </Link>
                </SwiperSlide>
              </div>
            ))}
            <div className=" absolute top-52 z-50">
              <SlideNavButtons />
            </div>
          </Swiper>
        </div>
      </div>
      <div className="py-8 w-[1400px] mx-auto">
        <Link href="/dataanalysis" className="hover:text-[#286f6b]">
          <h3 className="text-2xl font-semibold p-4">Data Analysis</h3>
        </Link>

        <div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={3}
            navigation={false}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {dataanalysis.map((course) => (
              <div key={course.id}>
                <SwiperSlide key={course.id} className="px-8 py-16  ">
                  <Link href={`/dataanalysis/${course.id}`}>
                    <div class="w-[400px] mx-auto h-[450px] p-4 bg-white rounded-lg flex-col justify-center items-start ">
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
                  </Link>
                </SwiperSlide>
              </div>
            ))}
            <div className=" absolute top-52 z-50">
              <SlideNavButtons />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
