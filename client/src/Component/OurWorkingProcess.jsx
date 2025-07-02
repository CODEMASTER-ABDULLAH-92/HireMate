import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { data } from "../assets/assets";

gsap.registerPlugin(ScrollTrigger);

const OurWorkingProcess = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      index: 1,
      heading: "What is your return policy?",
      summary:
        "You can return any item within 30 days of purchase for a full refund.",
      minus: data.minus,
      plus: data.plus,
    },
    {
      index: 2,
      heading: "How do I track my order?",
      summary:
        "After placing your order, you will receive an email with a tracking link.",
      minus: data.minus,
      plus: data.plus,
    },
    {
      index: 3,
      heading: "Do you offer international shipping?",
      summary:
        "Yes, we ship to most countries worldwide with additional shipping charges.",
      minus: data.minus,
      plus: data.plus,
    },
    {
      index: 4,
      heading: "How can I contact customer support?",
      summary:
        "You can contact us via email or our 24/7 live chat on the website.",
      minus: data.minus,
      plus: data.plus,
    },
    {
      index: 5,
      heading: "Can I change my order after placing it?",
      summary:
        "Yes, you can modify or cancel your order within 2 hours of placing it.",
      minus: data.minus,
      plus: data.plus,
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="flex pb-10 sm:items-center items-start sm:flex-row flex-col gap-6">
        <span className="bg-[#B9FF66] py-2 px-4 rounded-[5px] text-3xl">
          Our Working Process
        </span>
        <p>
          Step-by-Step Guide to Achieving <br /> Your Business Goals
        </p>
      </div>

      {/* FAQ Section */}
      <div className="space-y-6">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`border-[1px] border-black rounded-[21px] px-6 py-4 transition-colors duration-300 ${
                isOpen ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"
              }`}
            >
              {/* Top Bar */}
              <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
                <div className="flex items-center gap-4">
                  <span className="text-2xl md:text-5xl font-bold">0{item.index}</span>
                  <span className=" text-lg md:text-xl">{item.heading}</span>
                </div>
                <img
                  src={isOpen ? item.minus : item.plus}
                  className="h-5 md:h-10 transition-transform duration-300"
                  alt="toggle"
                />
              </div>

              {/* Content */}
              {isOpen && (
                <div className="mt-4 transition-all duration-500 ease-in-out">
                  <hr className="mb-4" />
                  <p className="text-gray-800">{item.summary}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurWorkingProcess;
