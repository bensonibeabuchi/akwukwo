"use client";
import React from "react";
import { useState } from "react";
import { FaSearch, FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function Faq() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);

  return (
    <div>
      <div className="w-full pt-36 text-[#241f0b] p-8 pb-32 mx-auto bg-[#deeeed]">
        <div className="w-[1200px] mx-auto ">
          <h2 className="text-center p-8">Frequently Asked Question</h2>
          <p
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-4 w-full text-[#286f6b] flex text-xl items-center justify-between font-semibold border-t-[1px] border-[#84959444]"
          >
            How do I enroll in a course?
            {!isOpen ? (
              <FaAngleDown className="h-5 ml-4" />
            ) : (
              <FaAngleUp className="h-5 ml-4" />
            )}
          </p>
          {isOpen && (
            <div className=" p-4 flex items-center border-t-[1px] border-[#84959444]">
              <p>
                To enroll in a course, simply navigate to the course page, click
                on the &quot;Enroll Now&quot; button, and follow the prompts to complete
                the enrollment process
              </p>
            </div>
          )}
        </div>
        <div className="w-[1200px] mx-auto ">
          <p
            onClick={() => setIsOpen1((prev) => !prev)}
            className="p-4 w-full text-[#286f6b] flex text-xl items-center justify-between font-semibold border-t-[1px] border-[#84959444]"
          >
            Can I access the course materials after the course has ended
            {!isOpen1 ? (
              <FaAngleDown className="h-5 ml-4" />
            ) : (
              <FaAngleUp className="h-5 ml-4" />
            )}
          </p>
          {isOpen1 && (
            <div className=" p-4 flex items-center border-t-[1px] border-t-[#84959444]">
              <p>
                Yes, you will have lifetime access to the course materials once
                you enroll. You can revisit the course content and resources at
                any time.
              </p>
            </div>
          )}
        </div>
        <div className="w-[1200px] mx-auto ">
          <p
            onClick={() => setIsOpen2((prev) => !prev)}
            className="p-4 w-full text-[#286f6b] flex text-xl items-center justify-between font-semibold border-t-[1px] border-[#84959444]"
          >
            Are there any prerequisites for the courses?
            {!isOpen2 ? (
              <FaAngleDown className="h-5 ml-4" />
            ) : (
              <FaAngleUp className="h-5 ml-4" />
            )}
          </p>
          {isOpen2 && (
            <div className=" p-4 flex items-center border-t-[1px] border-[#84959444]">
              <p>
                The prerequisites for each course vary. Some courses may require
                prior knowledge of certain programming languages or concepts.
                Please refer to the course description or prerequisites section
                for detailed information
              </p>
            </div>
          )}
        </div>
        <div className="w-[1200px] mx-auto ">
          <p
            onClick={() => setIsOpen3((prev) => !prev)}
            className="p-4 w-full text-[#286f6b] flex text-xl items-center justify-between font-semibold border-t-[1px] border-[#84959444]"
          >
            Can I get a certificate upon course completion?
            {!isOpen3 ? (
              <FaAngleDown className="h-5 ml-4" />
            ) : (
              <FaAngleUp className="h-5 ml-4" />
            )}
          </p>
          {isOpen3 && (
            <div className=" p-4 flex items-center border-t-[1px] border-[#84959444]">
              <p>
                Yes, upon successful completion of a course, you will receive a
                certificate of completion. This certificate can be downloaded
                and shared to showcase your achievement.
              </p>
            </div>
          )}
        </div>
        <div className="w-[1200px] mx-auto ">
          <p
            onClick={() => setIsOpen4((prev) => !prev)}
            className="p-4 w-full text-[#286f6b] flex text-xl items-center justify-between font-semibold border-t-[1px] border-[#84959444]"
          >
            What payment methods are accepted for course enrollment?
            {!isOpen4 ? (
              <FaAngleDown className="h-5 ml-4" />
            ) : (
              <FaAngleUp className="h-5 ml-4" />
            )}
          </p>
          {isOpen4 && (
            <div className=" p-4 flex items-center border-t-[1px] border-[#84959444]">
              <p>
                We accept various payment methods, including credit/debit cards
                and online payment platforms. During the enrollment process, you
                will be provided with the available payment options.
              </p>
            </div>
          )}
        </div>
        <div className="w-[1200px] mx-auto ">
          <p
            onClick={() => setIsOpen5((prev) => !prev)}
            className="p-4 w-full text-[#286f6b] flex text-xl items-center justify-between font-semibold border-t-[1px] border-[#84959444]"
          >
            Are there any discounts or promotions available for the courses?
            {!isOpen5 ? (
              <FaAngleDown className="h-5 ml-4" />
            ) : (
              <FaAngleUp className="h-5 ml-4" />
            )}
          </p>
          {isOpen5 && (
            <div className=" p-4 flex items-center border-t-[1px] border-[#84959444]">
              <p>
                We occasionally offer discounts and promotions on our courses.
                Stay updated by subscribing to our newsletter or following us on
                social media to receive notifications about any ongoing
                discounts or promotions
              </p>
            </div>
          )}
        </div>
        <div className="w-[1200px] mx-auto ">
          <p
            onClick={() => setIsOpen6((prev) => !prev)}
            className="p-4 w-full text-[#286f6b] flex text-xl items-center justify-between font-semibold border-t-[1px] border-[#84959444]"
          >
            Can I get a refund if I am not satisfied with the course?
            {!isOpen6 ? (
              <FaAngleDown className="h-5 ml-4" />
            ) : (
              <FaAngleUp className="h-5 ml-4" />
            )}
          </p>
          {isOpen6 && (
            <div className=" p-4 flex items-center border-t-[1px] border-[#84959444]">
              <p>
                We offer a refund policy within a specified timeframe. If you
                are unsatisfied with the course, please contact our support team
                within the refund period to initiate the refund process.
              </p>
            </div>
          )}
        </div>
        <div className="w-[1200px] mx-auto ">
          <p
            onClick={() => setIsOpen7((prev) => !prev)}
            className="p-4 w-full text-[#286f6b] flex text-xl items-center justify-between font-semibold border-t-[1px] border-[#84959444]"
          >
            Is technical support available during the course?
            {!isOpen7 ? (
              <FaAngleDown className="h-5 ml-4" />
            ) : (
              <FaAngleUp className="h-5 ml-4" />
            )}
          </p>
          {isOpen7 && (
            <div className=" p-4 flex items-center border-t-[1px] border-[#84959444]">
              <p>
                Yes, we provide technical support to assist you during the
                course. If you encounter any technical issues or have questions
                related to the course content, you can reach out to our support
                team for assistance.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
