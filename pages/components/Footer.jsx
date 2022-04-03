import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mt-44 bg-[#F2F8F2] dark:bg-[#354046] py-12 px-8">
        <section className="flex">
          <div>
            <h1>FarmVest</h1>
            <p>
              High level experience in web design and development knowledge,
              producing quality work.
            </p>
          </div>
          {/* 2nd Flex */}
          <div>
            <p>
              Subscribe to stay tuned for new web design and latest updates.
              Let&rsquo;s do it!
            </p>
            <div className="md:bg-[#E9EBEB] md:w-auto py-2 md:py-4 px-8 md:px-2 rounded-md">
              <input
                type="text"
                placeholder="Enter your email"
                className=" border-2 md:inline  md:w-auto text-center md:border-none md:outline-none md:bg-[#E9EBEB] font-medium text-black py-2 rounded-md md:py-0"
              />
              <a
                href="#"
                className="bg-mainGreen  block md:inline py-3 px-6 cursor-pointer text-white rounded-lg shadow-md mt-2 md:mt-0"
              >
                Get Started
              </a>
            </div>
          </div>
          {/* 3rd Flex */}
          <div>
            <h1>Follow us</h1>
          </div>
          {/* 4th Flex */}
          <div>
            <h1>Call us</h1>
            <span>+2349123456789</span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
