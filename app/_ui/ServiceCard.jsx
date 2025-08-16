"use client";

import { useState } from "react";
import { BASE_URL } from "../_api/apisConfig";
import WhatsAppButtonService from "./WhatsAppButtonService";

function ServiceCard({ service, locale }) {
  return (
    <div className="relative transition-all w-full md:w-[31%] sm:w-[48%] h-full ">
      <div className="bg-gradient-to-b from-primary to-emerald-500/0 w-[20%] h-20 absolute top-0 right-0 -z-10 rounded-3xl" />

      <div className="bg-white/15 border-2 border-white rounded-3xl flex items-center justify-center gap-5 text-center p-2.5 flex-col text-white backdrop-blur-3xl h-full">
        <div
          className={`flex items-center justify-center flex-row min-h-[60px] ${
            locale === "ar" ? "flex-row-reverse" : ""
          }`}
        >
          {service.my_tech_stacks?.map((tech, i) => (
            <div
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-delay={50 * i}
              className={`transition-transform duration-300 ease-in-out hover:-translate-y-1 ${
                i > 0 ? "-ml-5" : ""
              }`}
              key={tech.documentId}
            >
              <TechTooltip
                imgUrl={`${BASE_URL}${tech.skillImage.url}`}
                name={tech.skillName}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between gap-2.5 text-center flex-col h-full">
          <div>
            <p className="text-[18px] font-semibold">{service.title}</p>
            <p className="text-[14px]">{service.description}</p>
          </div>

          <WhatsAppButtonService textMessage={service.textMessage} />
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;

function TechTooltip({ imgUrl, name }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div
        className={`transition-all hover:scale-[1.1] hover:bg-gray-700 hover:border-primary bg-bg-body border-2 border-white/50 flex items-center justify-center p-2.5 rounded-full ${
          show && "z-10"
        }`}
      >
        <img
          src={imgUrl}
          alt={name}
          className="w-9 h-9 transition-all p-[2px] object-contain"
        />
      </div>
      <span
        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 rounded bg-primary text-white text-xs whitespace-nowrap shadow-lg transition-all duration-200
          ${
            show
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-90 pointer-events-none"
          }
        `}
        style={{ zIndex: 50 }}
      >
        {name}
      </span>
    </div>
  );
}
