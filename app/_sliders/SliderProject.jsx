"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./SliderProject.css";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";
import { useAppLocale } from "../_providers/LocaleProvider";
import { BASE_URL } from "../_api/apisConfig";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function SliderProject({ projectImags }) {
  const swiperRef = useRef(null);
  const locale = useAppLocale();

  if (!Array.isArray(projectImags) || projectImags.length === 0) return null;

  return (
    <div
      className="SliderProject relative"
      onMouseEnter={() => {
        if (swiperRef.current) swiperRef.current.autoplay.stop();
      }}
      onMouseLeave={() => {
        if (swiperRef.current) swiperRef.current.autoplay.start();
      }}
    >
      <Swiper
        key={locale}
        dir={locale === "ar" ? "rtl" : "ltr"}
        pagination={{
          type: "progressbar",
        }}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        autoHeight={true}
        loop={true}
        className="mySwiper"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={{
          prevEl: ".custom-swiper-prev-SliderProject",
          nextEl: ".custom-swiper-next-SliderProject",
        }}
      >
        {projectImags.map((img, i) => (
          <SwiperSlide key={i} className="w-full">
            <div className="p-5 flex flex-col items-center justify-center gap-2 rounded-lg overflow-hidden overflow-y-auto">
              <img
                className="duration-300 transition-all rounded-lg"
                src={`${BASE_URL}${img.url}`}
                alt={`project-${i}`}
                style={{ userSelect: "none" }}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Navigation Buttons */}
      <button
        className="cursor-pointer custom-swiper-prev-SliderProject absolute top-20 left-0 md:-left-5 z-10 -translate-y-1/2 bg-primary/50 hover:bg-primary transition-all text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
        type="button"
        aria-label="Previous"
      >
        <FaArrowLeft />
      </button>
      <button
        className="cursor-pointer custom-swiper-next-SliderProject absolute top-20 right-0 md:-right-5 z-10 -translate-y-1/2 bg-primary/50 hover:bg-primary transition-all text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
        type="button"
        aria-label="Next"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

export default SliderProject;
