"use client";

import { useLocale } from "next-intl";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

// Accordion Container Component
const Accordions = ({ children }) => {
  return <div className="w-full space-y-3">{children}</div>;
};

// Question Component
const Question = ({ question, answer, isDefaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);
  const locale = useLocale();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-none mb-3">
      {/* Question Header */}
      <button
        onClick={toggleOpen}
        className={`flex items-center ${
          locale === "ar" ? "flex-row" : ""
        } cursor-pointer w-full px-5 py-4 transition-all duration-300 rounded-lg justify-between ${
          isOpen
            ? "bg-primary text-white"
            : "bg-white/15 text-white hover:bg-white/25"
        }`}
      >
        <p
          className={`${
            locale === "ar" ? "text-right" : "text-left"
          } text-[20px] md:text-2xl w-full font-medium`}
        >
          {question}
        </p>
        <FaChevronDown
          className={`w-6 h-6 transition-transform duration-300 flex-shrink-0 ml-4 ${
            isOpen ? "rotate-180" : ""
          } text-white`}
        />
      </button>

      {/* Answer Content */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/15 px-5 py-3 rounded-lg flex items-center">
          <p
            className={`${
              locale === "ar" ? "text-right" : "text-left"
            } text-lg text-white leading-relaxed`}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export { Accordions, Question };
