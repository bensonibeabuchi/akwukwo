"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import Image from "next/image";
import googleIcon from "../../../../public/images/google-light.png";
import logo2 from "../../../../public/images/akwukwo2.png";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { loginWithPassword } from "@/redux/features/slices/authSlice";
import { IoMdEyeOff, IoMdEye, IoIosClose } from "react-icons/io";

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const validate = () => {
    if (!email.trim()) return "Email is required";
    if (!password.trim()) return "Password is required";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setLoading(true);
    try {
      await dispatch(loginWithPassword({ email, password })).unwrap();
      router.push("/"); // Redirect on success
    } catch (err) {
      if (err?.message?.includes("Invalid login credentials")) {
        setError("User not found or password incorrect");
      } else {
        setError(err.message || "Login failed");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) setError(error.message);
    setLoading(false);
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
          LOGIN
        </p>

        <form className="p-2 sm:p-4 mt-4" onSubmit={onSubmit}>
          {/* Email */}
          <div className="flex flex-col py-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter Work Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
            />
          </div>

          {/* Password */}
          <div className="flex relative flex-col py-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>

            <span
              onClick={toggleShowPassword}
              className="absolute right-4 top-10 sm:top-11 cursor-pointer text-gray-600"
            >
              {showPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
            </span>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full rounded-md border-0 py-3 px-3 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
            />

            <small className="font-bold text-[#12524f] text-end mt-1">
              <Link href="/password-reset">Forgot Password?</Link>
            </small>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-300 font-semibold cursor-pointer px-8 py-3 rounded-lg my-4 hover:bg-amber-200 disabled:opacity-50"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>

        {/* Error Message */}
        {error && (
          <div className="text-white relative p-4 mt-4 text-center rounded-md w-full bg-red-500">
            <button
              onClick={() => setError("")}
              className="absolute -top-3 right-3 bg-black text-white rounded-full"
            >
              <IoIosClose size={20} />
            </button>
            {error}
          </div>
        )}

        {/* Register Redirect */}
        <div className="text-center mt-4">
          <p>
            Dont have an account?{" "}
            <Link href="/auth/signup" className="font-bold text-[#12524f]">
              Register
            </Link>
          </p>
        </div>

        {/* OR Divider */}
        <div>
          <p className="text-center my-4">OR</p>
        </div>

        {/* Google Login */}
        <div className="flex justify-center items-center gap-2">
          <p className="font-light">Login with</p>
          <button
            className="bg-white p-2 rounded"
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            <Image
              src={googleIcon}
              alt="google logo"
              width={100}
              height={100}
              className="w-8 h-8"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
