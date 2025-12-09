import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/akwukwo.png";

export default function footer() {
  return (
    <div className="bg-[#286f6b]">
      <div className="w-[1500px] mx-auto p-16 pb-8 text-white h-[40vh] grid grid-cols-4">
        <div>
          <ul className="space-y-4">
            <li className="font-medium text-2xl">Features</li>
            <li>
              <Link href="/terms" className="hover:text-[#fcdc66]">
                Terms of use
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-[#fcdc66]">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link href="/" className="hover:text-[#fcdc66]">
                <Image src={logo} alt="lgo" width={100} />
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <ul className="space-y-4">
            <li className="font-medium text-2xl">Quick links</li>
            <li>
              {" "}
              <Link href="./courses" className="hover:text-[#fcdc66]">
                Browse courses
              </Link>
            </li>
            <li>
              <Link href="./about" className="hover:text-[#fcdc66]">
                About us
              </Link>
            </li>
            <li>
              <Link href="./contact" className="hover:text-[#fcdc66]">
                Contact us
              </Link>
            </li>
            <li>
              <Link href="./faq" className="hover:text-[#fcdc66]">
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/bensonibeabuchi/"
                target="_blank"
                className="hover:text-[#fcdc66]"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/BensonIbeabuchi"
                target="_blank"
                className="hover:text-[#fcdc66]"
              >
                Twitter
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className=" font-medium text-2xl">Subscribe to our newsletter</h3>
          <div className="flex h-16 text-center">
            <form action="https://formspree.io/f/xeqbjnyj" method="POST">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="p-4 text-black"
              />
              <button className="rounded-none p-4">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
