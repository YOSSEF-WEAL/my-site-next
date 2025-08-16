"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./SliderTechStack.css";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useAppLocale } from "../_providers/LocaleProvider";
import { BASE_URL } from "../_api/apisConfig";
import Image from "next/image";

function SliderTechStack({ techStack }) {
  const locale = useAppLocale();

  if (!Array.isArray(techStack) || techStack.length === 0) return null;
  return (
    <div
      key={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="0"
      className="SliderTechStack relative mt-3 w-full"
    >
      <Swiper
        slidesPerView={3}
        spaceBetween={8}
        navigation={{
          nextEl: ".custom-swiper-next",
          prevEl: ".custom-swiper-prev",
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: "auto",
            spaceBetween: 15,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper w-full"
      >
        {techStack.map((tech) => (
          <SwiperSlide key={tech.id} className="!w-auto">
            <div className="p-5 w-[125px] h-[125px] flex flex-col items-center justify-center gap-2 max-w-xs">
              <Image
                width={48}
                height={55}
                loading="lazy"
                className="w-12 hover:scale-[1.2] duration-300 transition-all object-contain"
                src={`${BASE_URL}${tech.skillImage.url}`}
                alt={tech.skillName}
              />
              <p className="text-base text-white text-center whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px]">
                {tech.skillName}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Navigation Buttons */}
      <button
        className="cursor-pointer custom-swiper-prev absolute top-1/2 left-5 md:-left-8 z-10 -translate-y-1/2 bg-primary/50 hover:bg-primary transition-all text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
        type="button"
        aria-label="Previous"
      >
        <FaArrowLeft />
      </button>
      <button
        className="cursor-pointer custom-swiper-next absolute top-1/2 right-5 md:-right-8 z-10 -translate-y-1/2 bg-primary/50 hover:bg-primary transition-all text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
        type="button"
        aria-label="Next"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

export default SliderTechStack;
