import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTheme } from "next-themes";
import "swiper/css";
import { Pagination, Autoplay } from "swiper";

const ImageSwiper = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="mt-12  lg:mt-24 px-16">
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
            slidesPerView: 3,
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
              src="/MarketWatch.png"
              alt="companylogo"
              className="dark:hidden"
            />
            <img
              src="/Marketwhite.png"
              alt="logo"
              className="hidden dark:inline-block"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/forbes.png" alt="companylogo" className="dark:hidden" />
            <img
              src="/forbes2.png"
              alt="companylogo"
              className="hidden dark:inline-block"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/business.png"
              alt="companylogo"
              className="dark:hidden"
            />
            <img
              src="/business2.png"
              alt="companylogo"
              className="hidden dark:inline-block"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/fidelity.png"
              alt="companylogo"
              className="dark:hidden"
            />
            <img
              src="/fidelity2.png"
              alt="companylogo"
              className="hidden dark:inline-block"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/wired2.png" alt="companylogo" className="dark:hidden" />
            <img
              src="/wired2.png"
              alt="companylogo"
              className="hidden dark:inline-block"
            />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default ImageSwiper;
