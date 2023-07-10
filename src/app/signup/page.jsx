import React from "react";

export default function page() {
  return (
    <>
      <div className="py-40">
        <div className="bg-[#286f6b] w-[1300px] rounded-xl mx-auto ">
          <div className="flex flex-row bg-red-500 w-[800px] ">
            <form
              action="https://formspree.io/f/xeqbjnyj"
              method="POST"
              className="flex flex-col p-16 bg-[#286f6b] rounded-3xl py-24"
            >
              <h2 className="text-[#286f6b]">Create an account</h2>
              <p>
                Create and account to start learning and get your dream job or
                upgrade your Resume
              </p>

              <label htmlFor="name" className="p-2">
                Full Name
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="What's your full name?"
                  className="border w-full rounded-lg h-10 p-4"
                />
              </label>

              <label htmlFor="email" className="p-2">
                Email address
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full border h-10 p-4"
                />
              </label>
              <label htmlFor="password" className="p-2">
                Paswword
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="border w-full rounded-lg h-10 p-4"
                />
              </label>
              <label htmlFor="password" className="p-2">
                Confirm paswword
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="border w-full rounded-lg h-10 p-4"
                />
              </label>

              <label htmlFor="Phone number">
                Phone number
                <input
                  type="number"
                  name="number"
                  id="number"
                  className="border w-full rounded-lg h-10 p-4"
                />
              </label>

              <label htmlFor="message" className="p-2">
                Message
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write your message for the team here"
                  className="w-full h-44 border p-4 "
                />
              </label>
              <button className=" p-4 text-xl my-4">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
