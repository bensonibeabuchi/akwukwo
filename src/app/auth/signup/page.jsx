'use client'

import Link from "next/link"
import Image from "next/image"
import logo2 from '../../../../public/images/akwukwo2.png'

export default function SignUp() {
  return (
    <div className="flex flex-col h-screen justify-center items-center px-4">
      
      {/* CARD WRAPPER */}
      <div className="bg-[#F8F8F6] w-full max-w-md md:max-w-lg rounded-lg p-10 shadow-sm">

        {/* LOGO */}
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image 
              src={logo2}
              height={20}
              width={500}
              alt="Akwukwo logo"
              className="cursor-pointer w-16 md:w-24"
            />
          </Link>
        </div>

        {/* PAGE TITLE */}
        <p className="text-[#12524f] text-4xl text-center font-bold mb-6">
          SIGN UP
        </p>

        {/* SUB-HEADER */}
        <p className="text-center text-gray-600 mb-8">
          Choose the type of account you want to create
        </p>

        {/* SIGNUP OPTIONS */}
        <div className="flex flex-col gap-4">

          <Link 
            href="/auth/register-student"
            className="w-full bg-amber-300 px-8 py-3 text-center font-semibold rounded-lg hover:bg-amber-200 transition"
          >
            Students Sign Up
          </Link>

          <Link 
            href="/auth/register-teacher"
            className="w-full bg-[#12524f] text-white px-8 py-3 text-center font-semibold rounded-lg hover:bg-[#0f3f3d] transition"
          >
            Teachers Sign Up
          </Link>

        </div>

        {/* DIVIDER */}
        <div className="my-8">
          <p className="text-center text-gray-500">OR</p>
        </div>

        {/* LOGIN LINK */}
        <div className="text-center">
          <p>
            Already have an account?{" "}
            <Link href="/auth/login" className="font-bold text-[#12524f]">
              Login
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}
