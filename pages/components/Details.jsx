import React from "react";

const DetailBox = ({ head, para, image, darkimg }) => {
  return (
    <div className="flex gap-4 items-center mt-4 dark:text-white ">
      <img src={image} alt="logo" className="w-14 dark:hidden" />
      <img src={darkimg} alt="logo" className="w-14 hidden dark:inline-block" />
      <div className="w-full lg:w-4/6 ">
        <h1 className="text-base lg:text-xl font-bold">{head}</h1>
        <p className="text-sm lg:text-lg">{para}</p>
      </div>
    </div>
  );
};
const Details = () => {
  return (
    <>
      <section className="block lg:flex mt-24 px-4 lg:px-16">
        <div className="font-body w-full lg:w-5/6 dark:text-white ">
          <h1 className="text-4xl md:text-6xl lg:text-7xl lg:text-[64px] font-bold  text-center lg:text-left">
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
    </>
  );
};

export default Details;
