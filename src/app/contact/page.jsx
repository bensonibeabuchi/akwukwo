import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-[1500px] mx-auto p-16 pb-32 place-items-center">
        <p className="mx-auto text-3xl font-semibold items-center text-center p-8">
          Contact Us
        </p>
        <div className="flex flex-row mx-auto border-black w-[500px]">
          <form
            action="https://formspree.io/f/xeqbjnyj"
            method="POST"
            className=" flex flex-col w-96 mx-auto"
          >
            <label htmlFor="name" className="p-2">
              Full Name
              <input
                type="text"
                name="name"
                id="name"
                placeholder="What's your full name?"
                className="border w-full h-10 p-4"
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
  );
}
