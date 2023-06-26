import React from "react";
import Image from "next/image";
import logo from "../images/akwukwo.png";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <div className="bg-[#286f6b]">
      <div className="w-[1500px] mx-auto text-xl">
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

            <ul className="flex space-x-8 items-center text-white font-medium">
              {/* <li>
                <Link href="/" className="hover:text-[#fcdc66]">
                  Home
                </Link>
              </li> */}
              <li>
                <Link href="./courses" className="hover:text-[#fcdc66]">
                  Courses
                </Link>
              </li>
              {/* <li>
                <Link href="./about" className="hover:text-[#fcdc66]">
                  About us
                </Link>
              </li> */}
            </ul>
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
