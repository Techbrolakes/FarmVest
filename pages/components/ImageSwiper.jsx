import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import required modules
import { Pagination, Autoplay } from "swiper";

const ImageSwiper = () => {
  return (
    <div className="py-8 px-12">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/MarketWatch.png" alt="companylogo" />
          {/* <img src="/Marketwhite.png" alt="companylogo" /> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src="/forbes.png" alt="companylogo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/business.png" alt="companylogo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/fidelity.png" alt="companylogo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/wired.png" alt="companylogo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/wired.png" alt="companylogo" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSwiper;
