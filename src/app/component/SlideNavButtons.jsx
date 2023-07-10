"use client";
import { useSwiper } from "swiper/react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const SlideNavButton = () => {
  const swiper = useSwiper();
  return (
    <div className="md:w-[1500px] w-[950px] flex justify-between items-center">
      <button
        className="bg-white text-[#286f6b] text-2xl rounded-full p-6 shadow-md"
        onClick={() => swiper.slidePrev()}
      >
        <FaChevronLeft className="text-[#286f6b] pointer-events-none text-3xl " />
      </button>
      <button
        className="bg-white text-[#286f6b] text-2xl rounded-full p-6 shadow-md"
        onClick={() => swiper.slideNext()}
      >
        <FaChevronRight className="text-[#286f6b] pointer-events-none text-3xl" />
      </button>
    </div>
  );
};

export default function SlideNavButtons() {
  return <SlideNavButton />;
}
