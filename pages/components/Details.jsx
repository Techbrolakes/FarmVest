import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const DetailBox = ({ head, para, image, darkimg }) => {
  return (
    <div className="flex gap-4 items-center mt-4 dark:text-white ">
      <img src={image} alt="logo" className="w-14 dark:hidden" />
      <img src={darkimg} alt="logo" className="w-14 hidden dark:inline-block" />
      <div className="w-full lg:w-4/6 ">
        <h1 className="text-base lg:text-xl font-bold text-primaryText dark:text-white">
          {head}
        </h1>
        <p className="text-sm lg:text-lg">{para}</p>
      </div>
    </div>
  );
};
const Details = () => {
  return (
    <>
      <section className="block lg:flex px-4 lg:px-16 mt-24 lg:mt-64">
        <div className="font-body w-full lg:w-5/6 dark:text-white ">
          <h1 className=" text-primaryText dark:text-white text-4xl md:text-6xl lg:text-7xl lg:text-[64px] font-bold  text-center lg:text-left mb-8">
            How <span className="text-mainGreen">FarmVest</span> Works
          </h1>
          <p className="text-sm lg:text-lg text-primaryText w-full lg:w-5/6 dark:text-white  text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,
            mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem
            ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur{" "}
          </p>
          <article>
            <DetailBox
              head="Download FarmVest"
              para="Start by downloading FarmVest app on your Android or IOS"
              image="/phone.png"
              darkimg="darkphone.png"
            />
            <DetailBox
              head="Create account"
              para="Start by downloading FarmVest app on your Android or IOS"
              image="/peop.png"
              darkimg="darkpeop.png"
            />
            <DetailBox
              head="Link your bank account"
              para="Start by downloading FarmVest app on your Android or IOS"
              image="/bank.png"
              darkimg="darkbank.png"
            />
            <DetailBox
              head="Start Investing"
              para="Start by downloading FarmVest app on your Android or IOS"
              image="/dollar.png"
              darkimg="darkdollar.png"
            />
          </article>
        </div>
        <div className="mt-8 lg:mt-0">
          <img
            src="/man.png"
            alt="manpicture"
            className="flex-1 h-full dark:hidden"
          />
          <img
            src="/darkman.png"
            alt="manpicture"
            className="flex-1 h-full hidden dark:inline-block"
          />
        </div>
      </section>

      <div className="flex flex-col-reverse lg:flex-row gap-12 px-4 lg:px-12 mt-24 lg:mt-64">
        <img
          src="/boy.png"
          alt="boy"
          className=" w-full lg:w-1/2 dark:hidden"
        />
        <img
          src="/darkboy.png"
          alt="boy"
          className=" w-full lg:w-1/2 hidden dark:inline-block"
        />
        <div className="font-body w-full lg:w-4/6 dark:text-white text-primaryText text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-[70px] font-bold mb-8">
            Your <span className="text-mainGreen"> pathway </span> to Future
            Investment
          </h1>
          <p className="text-sm lg:text-base mb-8  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,
            mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem
            ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur
          </p>
          <div className="flex justify-between items-center py-4 bg-[#F2F8F2] dark:bg-[#313C42] px-4 rounded-md shadow-md">
            <h1 className="lg:text-lg text:base">What is FarmVest?</h1>
            <span>
              <MdOutlineKeyboardArrowDown
                className="text-mainGreen"
                size="32px"
              />
            </span>
          </div>
          <div className="flex justify-between items-center py-4 bg-[#F2F8F2] dark:bg-[#313C42] px-4 rounded-md shadow-md my-6">
            <h1 className="lg:text-lg  text:base">How safe is FarmVest</h1>
            <span>
              <MdOutlineKeyboardArrowDown
                className="text-mainGreen"
                size="32px"
              />
            </span>
          </div>
          <div className="flex justify-between items-center py-4 bg-[#F2F8F2] dark:bg-[#313C42] px-4 rounded-md shadow-md ">
            <h1 className="lg:text-lg text:base">
              What do I gain from using FarmVest?
            </h1>
            <span>
              <MdOutlineKeyboardArrowDown
                className="text-mainGreen"
                size="32px"
              />
            </span>
          </div>
        </div>
      </div>

      <section className="block lg:flex px-4 lg:px-16 mt-24 lg:mt-64">
        <div className="font-body w-full lg:w-5/6 dark:text-white ">
          <h1 className=" text-primaryText dark:text-white text-4xl md:text-6xl lg:text-7xl lg:text-[64px] font-bold  text-center lg:text-left mb-8">
            Why choose <span className="text-mainGreen">FarmVest</span>
          </h1>
          <p className="text-sm lg:text-lg text-primaryText w-full lg:w-5/6 dark:text-white  text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,
            mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem
            ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur{" "}
          </p>
          <article>
            <DetailBox
              para="Start by download"
              image="/1.1.png"
              darkimg="dark1.1.png"
            />
            <DetailBox
              para="Flexibility in Investment"
              image="/2.2.png"
              darkimg="dark2.2.png"
            />
            <DetailBox
              para="Encrypted and Secured"
              image="/3.3.png"
              darkimg="dark3.3.png"
            />
            <DetailBox
              para="Withdraw Anytime"
              image="/4.4.png"
              darkimg="dark4.4.png"
            />
          </article>
        </div>
        <div className="mt-8 lg:mt-0">
          <img src="/girl.png" alt="girlpicture" />
        </div>
      </section>
    </>
  );
};

export default Details;
