import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper";
import { ImAppleinc } from "react-icons/im";
import { FaGooglePlay } from "react-icons/fa";

const Testimonials = ({ img, name }) => {
  return (
    <div className="flex shadow-lg w-4/5 mx-auto lg:w-full mt-8">
      <img src={img} alt="testimonial" className="w-1/2 lg:w-full" />
      <article className="bg-[#F2F9F2] dark:bg-[#313C42] dark:text-white rounded-md flex flex-col justify-between text-sm lg:text-lg py-4 pl-4">
        <p className="text-xs lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis
          aenean sit dictum tincidunt. Ut arcu, suscipit ac
        </p>
        <span className="text-xs lg:text-lg font-semibold self-start">
          {name}
        </span>
      </article>
    </div>
  );
};
const Customers = () => {
  return (
    <>
      <div className="mt-24 lg:mt-64 py-12 w-full lg:w-5/6 font-body mx-auto">
        <h1 className=" text-primaryText dark:text-white text-4xl md:text-6xl lg:text-[70px] font-bold mb-8 text-center">
          What <span className="text-mainGreen"> Customers </span> have to say
        </h1>
        <p className="text-sm lg:text-lg text-primaryText w-full lg:w-1/2  mx-auto dark:text-white text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis
          aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor
          sit amet.Lorem ipsum dolor sit amet, consectetur{" "}
        </p>

        <section>
          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Testimonials img="/c1.png" name="Tonia Smart" />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials img="/c2.png" name="Grace Obi" />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonials img="/lekan.png" name="Lekan Dar" />
            </SwiperSlide>
          </Swiper>
        </section>
      </div>

      <section className="px-4 lg:px-24 mt-44 font-body ">
        <div className="bg-[#F2F8F2] dark:bg-[#354046] bg-[url('/line.png')] dark:bg-[url('/darkline.png')] bg-center bg-no-repeat bg-cover rounded-md">
          <article className="flex flex-col justify-center items-center py-16">
            <h1 className="text-md lg:text-6xl w-4/5 text-primaryText font-bold text-center dark:text-white ">
              Download <span className="text-mainGreen"> FarmVest app </span>
              and invest in your future
            </h1>
            <div className="flex px-4  mt-4">
              <button className="bg-black flex items-center hover:bg-primaryText text-white py-2 px-0 lg:px-4 rounded-lg shadow-lg">
                <ImAppleinc size="32px" />
                <div className="text-left">
                  <h1 className="text-[10px]"> Available on the</h1>
                  <img
                    src="/Vector.png"
                    alt="icon"
                    className="w-5/6 lg:w-full"
                  />
                </div>
              </button>
              <button className="bg-black ml-4 hover:bg-primaryText flex items-center text-white py-2 px-2 lg:px-2 rounded-lg shadow-lg">
                <FaGooglePlay size="32px" />
                <div className="text-left">
                  <h1 className="text-[10px]"> Available on the</h1>
                  <img src="/gp.png" alt="icon" />
                </div>
              </button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Customers;
