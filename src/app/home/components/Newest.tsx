"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import NftTemplate from "@/components/Nft/NftTemplate";
import AOS from "aos";
import "swiper/css";
import "swiper/css/bundle";
import "aos/dist/aos.css";

const Newest = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    840: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  };

  return (
    <div>
      <p className="text-3xl text-white font-bold mb-10 mr-4">جدیدترین موارد</p>
      <Swiper
        spaceBetween={10}
        breakpoints={breakpoints}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <NftTemplate />
        </SwiperSlide>
        <SwiperSlide>
          <NftTemplate />
        </SwiperSlide>
        <SwiperSlide>
          <NftTemplate />
        </SwiperSlide>
        <SwiperSlide>
          <NftTemplate />
        </SwiperSlide>
        <SwiperSlide>
          <NftTemplate />
        </SwiperSlide>
        <SwiperSlide>
          <NftTemplate />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Newest;
