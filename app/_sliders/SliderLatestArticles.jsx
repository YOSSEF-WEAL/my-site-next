"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./SliderLatestArticles.css";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ArticleCard from "../_ui/ArticleCard";

function SliderLatestArticles({ locale, article }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease"
      data-aos-duration="1000"
      key={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="SliderLatestArticles relative mt-3 w-full"
    >
      <Swiper
        // Responsive breakpoints
        breakpoints={{
          // Mobile (Default)
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // Tablet
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // Desktop
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        navigation={{
          nextEl: ".custom-swiper-next-SliderLatestArticles",
          prevEl: ".custom-swiper-prev-SliderLatestArticles",
        }}
        autoplay={{
          delay: 2500, // Slightly increased delay for better user experience
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper w-full"
      >
        {article.map((articleItem) => (
          <SwiperSlide key={articleItem.id}>
            <ArticleCard article={articleItem} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button
        className="cursor-pointer custom-swiper-prev-SliderLatestArticles absolute top-1/2 left-0 md:-left-5 z-10 -translate-y-1/2 bg-primary/50 hover:bg-primary transition-all text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
        type="button"
        aria-label="Previous"
      >
        <FaArrowLeft />
      </button>
      <button
        className="cursor-pointer custom-swiper-next-SliderLatestArticles absolute top-1/2 right-0 md:-right-5 z-10 -translate-y-1/2 bg-primary/50 hover:bg-primary transition-all text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
        type="button"
        aria-label="Next"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

export default SliderLatestArticles;
