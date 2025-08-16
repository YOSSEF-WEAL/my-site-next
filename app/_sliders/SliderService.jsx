"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "./SliderService.css";
import { EffectCards } from "swiper/modules";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { useAppLocale } from "../_providers/LocaleProvider";

function SliderService() {
  const locale = useAppLocale();
  const t = useTranslations("Services_Page.Services_Sc");

  const SlidersContect = Object.values(t.raw("SlidersContect"));

  return (
    <div className="SliderService w-full h-full min-h-[400px] flex items-center justify-center overflow-hidden">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="800"
        data-aos-delay="300"
        className="max-w-full mt-5 px-12 md:max-w-4xl flex items-center justify-center gap-3 flex-col w-full h-full"
      >
        <Swiper
          key={locale}
          dir={locale === "ar" ? "rtl" : "ltr"}
          navigation={{
            nextEl: ".custom-swiper-next",
            prevEl: ".custom-swiper-prev",
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Navigation, Autoplay]}
          className="mySwiper w-full h-full"
        >
          {SlidersContect.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="p-5 flex items-center justify-center gap-3 flex-col w-full h-full">
                <img
                  src={`/${slide.img}`}
                  alt={slide.title}
                  loading="lazy"
                  className="md:w-full max-h-40 md:max-h-[201px]"
                />

                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl">{slide.title}</h3>
                  <p className="text-gray-200 font-light text-[20px] md:text-[24px]">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
    </div>
  );
}

export default SliderService;
