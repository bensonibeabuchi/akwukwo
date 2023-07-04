"use client";
import React from "react";
import Image from "next/image";
import aboutus from "../images/about.png";
import values from "../images/values.png";
import mission from "../images/mission.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import Link from "next/link";
import Testimonials from "../component/testimonials";

export default function page() {
  return (
    <div className="bg-[#286f6b] mx-auto">
      <div className="w-[1500px] pt-24 mx-auto">
        <div className="grid grid-cols-2 w-[1300px] h-[300px] mx-auto">
          <div className="text-white mt-24">
            <h2>About Us</h2>
            <p className="text-[#20625f] p-8 text-xl w-full leading-10 font-semibold mt-4 bg-[#c3e0de49] rounded-2xl">
              Welcome to our online learning platform. We are dedicated to
              providing high-quality tech courses and helping individuals
              enhance their skills in various domains. Our mission is to make
              learning accessible, engaging, and impactful for everyone.
            </p>
          </div>
          <div>
            <Image src={aboutus} width={1000} height={800} alt="heroshot" />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 pt-32">
        <div className="py-2 mx-auto mt-32 text-center ">
          <h2 className="p-4 text-[#286f6b]">Our Founders</h2>
        </div>
        <div className="w-full bg-[#c3e0de49] ">
          <div className="p-16 flex flex-row w-[1500px] my-8 mx-auto">
            <div className=" mx-auto text-center">
              <div className="w-[400px] rounded-full mx-auto h-[450px] p-4 bg-white flex-col justify-center items-start overflow-clip ">
                <div className="w-full h-[450px] overflow-clip">
                  <Image
                    src="https://github.com/bensonibeabuchi/capstoneimages/blob/main/profile/profile6.jpg?raw=true"
                    width={400}
                    height={800}
                    alt="Benson Ibeabuchi profile image"
                    className="mx-auto"
                  />
                </div>
              </div>
              <div className="p-[0px] flex-col justify-start items-start gap-[4px] flex">
                <div className="mx-auto p-4">
                  <p className="text-2xl uppercase font-extrabold text-[#286f6b]">
                    Benson Ibeabuchi
                  </p>
                  <p className="text-xl font-semibold">Co-Fouder & Ceo</p>
                </div>
              </div>
            </div>
            <div className=" mx-auto text-center">
              <div className="w-[400px] rounded-full mx-auto h-[450px] p-4 bg-white flex-col justify-center items-start overflow-clip ">
                <div className="w-full h-[550px]">
                  <Image
                    src="https://github.com/bensonibeabuchi/capstoneimages/blob/main/profile/profileella.jpg?raw=true"
                    width={800}
                    height={800}
                    alt="Immanuella I. O. profile image"
                    className="mx-auto object-fill scale-125"
                  />
                </div>
              </div>
              <div className="p-[0px] flex-col justify-start items-start gap-[4px] flex">
                <div className="mx-auto p-4">
                  <p className="text-2xl uppercase font-extrabold text-[#286f6b]">
                    Immanuella I. O.
                  </p>
                  <p className="text-xl font-semibold">
                    Co-Fouder & Brand Manager
                  </p>
                </div>
              </div>
            </div>
            <div className=" mx-auto text-center">
              <div className="w-[400px] rounded-full mx-auto h-[450px] p-4 bg-white flex-col justify-center items-start overflow-clip ">
                <div className="w-full h-[550px]">
                  <Image
                    src="https://github.com/bensonibeabuchi/capstoneimages/blob/main/profile/profile9.jpg?raw=true"
                    width={800}
                    height={800}
                    alt="Immanuella I. O. profile image"
                    className="mx-auto object-fill scale-125"
                  />
                </div>
              </div>
              <div className="p-[0px] flex-col justify-start items-start gap-[4px] flex">
                <div className="mx-auto p-4">
                  <p className="text-2xl uppercase font-extrabold text-[#286f6b]">
                    Avtomat Kalashnikova
                  </p>
                  <p className="text-xl font-semibold">Marketing Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1500px] mx-auto mt-40">
          <div className="grid grid-cols-2 items-center space-x-8">
            <div>
              <Image src={mission} width={900} height={900} alt="heroshot" />
            </div>

            <div className="space-y-4 text-[#0a1f1e]">
              <h2 className="text-[#286f6b]">Our Mission</h2>
              <p className=" py-8 text-xl leading-8">
                Our mission is to provide comprehensive and up-to-date courses
                that cater to the evolving demands of the tech industry. We
                believe in hands-on learning, practical projects, and a
                supportive community that fosters growth and collaboration.
              </p>
              <Link href="/courses">
                <button className="px-6 py-4 hover:bg-green-700 hover:text-[#fcdc66] hover:scale-105 hover:transition">
                  Explore our Courses
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#286f6b] h-[800px] p-16 pb-32 flex flex-col text-white mx-auto">
          <div>
            <h2 className="pb-4 text-center">Why choose Us</h2>
            <p className="italic font-medium mx-auto leading-40 pb-8 w-[600px] text-center">
              Akwukwo has revolutionized my learning experience. The platform
              offers a wide range of courses with top-notch instructors.
              I&apos;ve gained valuable skills that have helped me excel in my
              career. Highly recommended! <br /> Chidinma Nwaneti.
            </p>
          </div>
          <div>
            <Testimonials />
          </div>
        </div>

        <div className="w-[1500px] mx-auto mt-16">
          <div className="grid p-8 my-32 grid-cols-2 items-center">
            <div className="space-y-4 pl-24 text-[#0a1f1e] ">
              <h2 className="text-[#286f6b]">Values</h2>
              <p className=" font-medium text-xl leading-8">
                <span className="text-2xl font-bold text-[#286f6b]">
                  Excellence:
                </span>
                We are committed to delivering courses of the highest quality
                and ensuring a rewarding learning experience.
              </p>
              <p className=" font-medium text-xl leading-8">
                <span className="text-2xl font-bold text-[#286f6b]">
                  Accessibility:
                </span>
                We believe in making education accessible to all, breaking down
                barriers and promoting inclusivity.
              </p>
              <p className=" font-medium text-xl leading-8">
                <span className="text-2xl font-bold text-[#286f6b]">
                  Innovation:
                </span>
                We embrace innovation and constantly seek new ways to enhance
                the learning journey.
              </p>
              <p className="font-medium text-xl leading-8">
                <span className="text-2xl font-bold text-[#286f6b]">
                  Community:
                </span>
                We foster a vibrant community of learners, instructors, and
                industry professionals who share knowledge and support each
                other.
              </p>
              <Link href="/courses" className="my-16">
                <button className="px-6 py-4 hover:bg-green-700 my-16 hover:text-[#fcdc66] hover:scale-105 hover:transition">
                  Explore our CVlae
                </button>
              </Link>
            </div>
            <div>
              <Image src={values} width={900} height={900} alt="heroshot" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
