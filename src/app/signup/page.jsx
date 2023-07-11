import React from "react";
import { FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="py-40">
        <div className="w-[700px] mx-auto bg-[#286f6b45] rounded-2xl text-center p-16">
          <h2>Create an Account</h2>
          <p className="p-4 text-[#7e8887] w-3/5 mx-auto">
            Start your jounrney here into a world of infinite possiblities.
          </p>
          <form
            action="https://formspree.io/f/xeqbjnyj"
            method="POST"
            className="mx-auto"
          >
            <div className="">
              <div className="">
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="First name"
                  className="p-4 m-4 rounded w-full"
                  required
                />
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  placeholder="Last name"
                  className="p-4 m-4 rounded w-full "
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="p-4 m-4 rounded w-full"
                required
              />
              <div className="relative">
                <FaEyeSlash className="absolute ml-[530px] mt-7 text-[#286f6b] text-3xl pointer-events-none " />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="p-4 m-4 rounded w-full"
                  required
                />
              </div>
              <div className="relative">
                <FaEyeSlash className="absolute ml-[530px] mt-7 text-[#286f6b] text-3xl pointer-events-none " />
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  placeholder="Confirm password"
                  className="p-4 m-4 rounded w-full"
                  required
                />
              </div>
            </div>
            <button className="w-full p-4 m-4 text-xl font-bold">
              Create account
            </button>
          </form>
          <p className="p-4">
            Already have an account?{" "}
            <span className="font-bold cursor-pointer">
              <Link href="/login">Login</Link>
            </span>{" "}
          </p>
        </div>
      </div>
    </>
  );
}
