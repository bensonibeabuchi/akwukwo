"use client";
import React from "react";
import Image from "next/image";
import logo from "../images/akwukwo.png";
import Link from "next/link";
import { FaSearch, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";
import backend from "../backend";
import frontend from "../frontend";
import dataanalysis from "../dataanalysis";
import productdesign from "../productdesign";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [fClicked, setFClicked] = useState(false);
  const [pClicked, setPClicked] = useState(false);
  const [dClicked, setDClicked] = useState(false);
  return (
    <div className="bg-[#286f6b] w-full">
      <div className="md:w-[1500px]  mx-auto text-xl">
        <nav className="flex justify-between p-8 items-center">
          <div className="flex space-x-12">
            <Link href="/" className="hover:text-[#fcdc66]">
              <Image
                src={logo}
                alt="logo"
                width={130}
                className="items-center cursor-pointer "
              />
            </Link>

            <div>
              <div>
                <p
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="font-semibold flex w-full rounded-xl text-center p-1 text-white text-xl cursor-pointer"
                >
                  Courses
                  {!isOpen ? (
                    <FaAngleDown className="h-6 ml-4" />
                  ) : (
                    <FaAngleUp className="h-6 ml-4" />
                  )}
                </p>
              </div>

              {isOpen && (
                <div className="absolute bg-[#105854] border-[2px] border-[#0c7670] shadow-lg rounded-2xl z-50  p-4">
                  <ul className="text-white font-medium">
                    <li className="p-4 hover:underline hover:scale-[1.02] hover:text-[#fcdc66] bg-[#227e79] mb-2 rounded-2xl">
                      <Link href="/courses">All Programs</Link>
                    </li>
                    <div
                      onClick={() => setFClicked((prev) => !prev)}
                      className="p-4 relative hover:underline hover:scale-[1.02] hover:text-[#fcdc66] bg-[#227e79] mb-2 rounded-2xl"
                    >
                      <p>Frontend Development</p>{" "}
                      {fClicked && (
                        <div className="absolute top-1 left-72 bg-[#105854] border-[2px] border-[#0c7670] shadow-lg rounded-2xl z-50  p-4">
                          {frontend.map((fcourse) => (
                            <div key={fcourse.id}>
                              <Link href={`/frontend/${fcourse.id}`}>
                                <p className="p-4  hover:scale-[1.02] bg-[#227e79] mb-2 rounded-2xl truncate">
                                  {fcourse.title}
                                </p>
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => setIsClicked((prev) => !prev)}
                      className="p-4 relative hover:underline hover:scale-[1.02] hover:text-[#fcdc66] bg-[#227e79] mb-2 rounded-2xl"
                    >
                      <p>Backend Development</p>{" "}
                      {isClicked && (
                        <div className="absolute left-72 top-1 bg-[#105854] border-[2px] border-[#0c7670] shadow-lg rounded-2xl z-50  p-4">
                          {backend.map((bcourse) => (
                            <div key={bcourse.id}>
                              <Link href={`/backend/${bcourse.id}`}>
                                <p className="p-4  hover:scale-[1.02] bg-[#227e79] mb-2 rounded-2xl truncate">
                                  {bcourse.title}
                                </p>
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => setPClicked((prev) => !prev)}
                      className="p-4 relative hover:underline hover:scale-[1.02] hover:text-[#fcdc66] bg-[#227e79] mb-2 rounded-2xl"
                    >
                      <p>Product Design</p>
                      {pClicked && (
                        <div className="absolute top-1 left-72 bg-[#105854] border-[2px] border-[#0c7670] shadow-lg rounded-2xl z-50  p-4">
                          {productdesign.map((fcourse) => (
                            <div key={fcourse.id}>
                              <Link href={`/productdesign/${fcourse.id}`}>
                                <p className="p-4  hover:scale-[1.02] bg-[#227e79] mb-2 rounded-2xl truncate">
                                  {fcourse.title}
                                </p>
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => setDClicked((prev) => !prev)}
                      className="p-4 relative hover:underline hover:scale-[1.02] hover:text-[#fcdc66] bg-[#227e79] mb-2 rounded-2xl"
                    >
                      <p>Data Analysis</p>
                      {dClicked && (
                        <div className="absolute top-1 left-72 bg-[#105854] border-[2px] border-[#0c7670] shadow-lg rounded-2xl z-50  p-4">
                          {dataanalysis.map((dcourse) => (
                            <div key={dcourse.id}>
                              <Link href={`/dataanalysis/${dcourse.id}`}>
                                <p className="p-4  hover:scale-[1.02] bg-[#227e79] mb-2 rounded-2xl truncate">
                                  {dcourse.title}
                                </p>
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="relative flex items-center">
            <FaSearch className="absolute ml-4 text-[#286f6b] pointer-events-none " />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="What do you want to learn"
              className="rounded-2xl w-[700px] p-4 pl-12 outline-[#286f6b]"
            />
          </div>
          <button className="px-6 py-4 mr-8 hover:bg-white hover:text-green-700 hover:scale-105 hover:transition ">
            Sign up
          </button>
        </nav>
      </div>
    </div>
  );
}
