import { Button, IconButton } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import ImageSwiper from "./components/ImageSwiper";
import Details from "./components/Details";
import Customers from "./components/Customers";
import Footer from "./components/Footer";
import { BarLoader, HashLoader, ScaleLoader } from "react-spinners";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [nav, setnav] = useState(false);
  const { mounted, setMounted } = useState(false);

  const TogglePage = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const handleNavClick = () => {
    return setnav(!nav);
  };

  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1200);
  }, []);
  return (
    <div>
      <Head>
        <title>FarmVest</title>
        <meta name="description" content="Website Built By Lekan Dar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading ? (
        <div className="flex min-h-screen items-center justify-center">
          <ScaleLoader color="#008000" loading={loading} size={150} />
        </div>
      ) : (
        <div className="bg-white dark:bg-primaryText min-h-screen text-black">
          <section className="bg-[url('/bgicons.png')] dark:bg-[url('/darkbg.png')]  bg-contain bg-top lg:bg-center lg:bg-cover bg-no-repeat text-primaryText dark:text-white">
            <nav className="font-link text-lg flex justify-between items-center py-4 px-8 md:px-20">
              <div>
                <h1 className="font-medium text-4xl">FarmVest</h1>
              </div>
              <ul className="hidden gap-8 text-lg lg:flex">
                <li>Home</li>
                <li>About</li>
                <li>Features</li>
                <li>How it works</li>
              </ul>
              <div>
                <a
                  href="#"
                  className="border-2 text-lg hidden lg:inline-block border-black dark:border-white py-2 px-6 cursor-pointer text-primary rounded-lg mr-4"
                >
                  Sign In
                </a>
                <a
                  href="#"
                  className="bg-mainGreen text-lg hidden lg:inline-block py-3 px-6 cursor-pointer text-white rounded-lg shadow-md"
                >
                  Get Started
                </a>
                <Button
                  color="white"
                  colorScheme="green"
                  boxShadow={"2xl"}
                  ml="10px"
                  onClick={TogglePage}
                >
                  {theme === "light" ? <RiMoonClearFill /> : <RiSunFill />}
                </Button>
              </div>

              <div className="block lg:hidden">
                {nav ? (
                  <IconButton
                    boxShadow={"2xl"}
                    icon={
                      <FaTimes
                        color="#000"
                        onClick={() => {
                          handleNavClick();
                        }}
                      />
                    }
                  />
                ) : (
                  <IconButton
                    icon={
                      <FaBars
                        color="#000"
                        onClick={() => {
                          handleNavClick();
                        }}
                      />
                    }
                  />
                )}
              </div>
            </nav>
            <div
              className={
                nav
                  ? "hidden"
                  : "flex flex-col items-center justify-center pt-24 text-center font-body px-4 lg:px-0"
              }
            >
              <h1 className=" text-4xl md:text-6xl lg:text-7xl font-bold w-full lg:w-4/6 mb-4 dark:text-white">
                The easiest and fastest way to
                <span className="text-mainGreen"> Invest </span> in Agriculture
              </h1>
              <p className="w-full lg:w-1/2 text-lg mb-8 dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu,
                mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem
                ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur
              </p>
              <div className="md:bg-[#E9EBEB] w-full md:w-auto py-2 md:py-4  px-8 md:px-2 rounded-md">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className=" border-2   block md:inline w-full md:w-auto text-center md:border-none md:outline-none md:bg-[#E9EBEB] font-medium text-black py-2 rounded-md md:py-0"
                />
                <a
                  href="#"
                  className="bg-mainGreen  block md:inline py-3 px-6 cursor-pointer text-white rounded-lg shadow-md mt-2 md:mt-0"
                >
                  Get Started
                </a>
              </div>
            </div>
          </section>
          {nav ? (
            <div className="dark:text-white flex items-center flex-col justify-center gap-4 mt-24">
              <ul className="text-4xl text-center flex flex-col gap-8">
                <li>Home</li>
                <li>About</li>
                <li>Features</li>
                <li>How it works</li>
              </ul>
              <button className="py-2 block px-6 bg-mainGreen  cursor-pointer text-white rounded-lg shadow-md">
                Sign In
              </button>
              <button className="py-2 block px-6 bg-mainGreen  cursor-pointer text-white rounded-lg shadow-md">
                Get Started{" "}
              </button>
            </div>
          ) : (
            <article>
              <ImageSwiper />
              <Details />
              <Customers />
              <Footer />
            </article>
          )}
        </div>
      )}
    </div>
  );
}
