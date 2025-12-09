"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import Image from "next/image";
import logo2 from "../../../../public/images/akwukwo2.png";
import { useRouter } from "next/navigation";
import { IoIosClose } from "react-icons/io";
import { useCreateTeacherProfileMutation } from "@/redux/features/api/teachersApi";


export default function RegisterStudentPage() {
  const router = useRouter();
  const [createTeacher] = useCreateTeacherProfileMutation();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const validate = () => {
    if (!first_name.trim()) return "First name is required";
    if (!last_name.trim()) return "Last name is required";
    if (!email.trim()) return "Email is required";
    if (!password.trim()) return "Password is required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setStatus("");

    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setLoading(true);
    try {
      await createTeacher({ first_name, last_name, email, password }).unwrap();
      setStatus("Student registered successfully! Redirecting to login...");

      // Redirect after short delay
      setTimeout(() => router.push("/auth/login"), 1000);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen mx-auto justify-center items-center px-4">
      <div className="bg-[#F8F8F6] w-full max-w-lg rounded-lg p-8 sm:p-12 shadow">
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image
              src={logo2}
              height={20}
              width={500}
              alt="Akwukwo logo"
              className="cursor-pointer w-16 sm:w-56"
            />
          </Link>
        </div>

        <p className="text-[#12524f] text-3xl sm:text-4xl text-center font-bold">
          STUDENT SIGN UP
        </p>

        {/* Status Message */}
        {status && (
          <div className="p-3 my-4 rounded bg-green-100 text-green-800 text-center">
            {status}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="text-white relative p-3 my-4 text-center rounded-md w-full bg-red-500">
            <button
              onClick={() => setError("")}
              className="absolute -top-3 right-3 bg-black text-white rounded-full"
            >
              <IoIosClose size={20} />
            </button>
            {error}
          </div>
        )}

        <form className="p-2 sm:p-4 mt-4 space-y-4" onSubmit={handleSubmit}>
          {/* First Name */}
          <div>
            <label className="block mb-1 font-medium">First Name</label>
            <input
              type="text"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              placeholder="Enter First Name"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-1 font-medium">Last Name</label>
            <input
              type="text"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              placeholder="Enter Last Name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              placeholder="Enter Email"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
              placeholder="Enter Password"
            />
            <span
              onClick={toggleShowPassword}
              className="absolute right-3 top-3 cursor-pointer text-gray-600"
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-300 font-semibold cursor-pointer px-8 py-3 rounded-lg my-4 hover:bg-amber-200 disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div className="text-center mt-4">
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
