"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import testimonials from "../testimonial";
import Image from "next/image";
import fivestar from "../images/fivestar.png";
import { FaQuoteRight } from "react-icons/fa";

export default function page() {
  return (
    <div className="w-[1300px] mx-auto">
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={100}
          slidesPerView={2}
          pagination={{ clickable: true }}
          // autoplay
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={1} className="rounded-2xl bg-white p-16 mb-12 text-black">
              <div>
                <Image
                  src={fivestar}
                  width={200}
                  height={100}
                  alt="testimonial"
                />
                <p className="text-base overflow-hidden h-32 mt-2">
                  {testimonial.testimonial}
                </p>
                <div className="flex justify-between">
                  <div className="flex">
                    <div className="h-12 w-12 rounded-full overflow-hidden bg-green-800">
                      <Image
                        src={testimonial.image}
                        width={100}
                        height={300}
                        alt="image"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="mx-4">
                      <p className="col-span-3 text-xl font-semibold">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-400">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                  <div className="text-5xl text-[#286f6b]">
                    <FaQuoteRight />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
