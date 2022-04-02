import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTheme } from "next-themes";
import "swiper/css";
import { Pagination, Autoplay } from "swiper";

const ImageSwiper = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="mt-24 px-12">
      {theme}
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <div>
          <SwiperSlide>
            <img
              src={
                theme == "light" ?? "system"
                  ? "/MarketWatch.png"
                  : "/marketwhite.png"
              }
              alt="companylogo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={theme == "light" ?? "system" ? "forbes.png" : "/forbes2.png"}
              alt="companylogo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                theme == "light" ?? "system" ? "business.png" : "/business2.png"
              }
              alt="companylogo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                theme == "light" ?? "system" ? "fidelity.png" : "/fidelity2.png"
              }
              alt="companylogo"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={theme == "light" ?? "system" ? "wired.png" : "/wired2.png"}
              alt="companylogo"
            />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default ImageSwiper;
