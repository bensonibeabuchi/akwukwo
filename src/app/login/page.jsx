import React from "react";
import { FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="py-40">
        <div className="w-[700px] mx-auto bg-[#286f6b45] rounded-2xl text-center p-16">
          <h2>Login</h2>
          <p className="p-4 text-[#7e8887] w-3/5 mx-auto">
            Continue your jounrney here into a world of infinite possiblities.
          </p>
          <form
            action="https://formspree.io/f/xeqbjnyj"
            method="POST"
            className="mx-auto"
          >
            <div className="">
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
            </div>
            <button className="w-full p-4 m-4 text-xl font-bold">Login</button>
          </form>
          <p className="p-4">
            Don&apos;t have an account?{" "}
            <span className="font-bold">
              <Link href="/signup">Sign up</Link>
            </span>{" "}
          </p>
        </div>
      </div>
    </>
  );
}
