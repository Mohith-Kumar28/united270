import Image from "next/image";
import React from "react";
import { motion, useAnimate } from "framer-motion";
import SlidingText from "../utils/SlidingText";
import { galaktisRegular } from "@/styles/fonts";
import { fadeIn, staggerContainer } from "@/utils/motion";

const Hero = () => {
  return (
    <motion.div className="w-full h-screen flex flex-col md:justify-center py-20 overflow-hidden relative">
      <div className=" ">
        {/* <p className="text-pri-green text-9xl font-extrabold   ">
          Text to test here
        </p> */}
        <div className="flex overflow-hidden mt-4 relative z-0">
          <TranslateWrapper>
            <img
              className=" h-[14vmax] object-cover overflow-visible"
              src={"/images/texts/Asset_1.png"}
            />{" "}
            <img
              className="  h-[14vmax] object-cover overflow-visible hidden md:block"
              src={"/images/texts/Asset_1.png"}
            />
          </TranslateWrapper>
        </div>
        <p
          className={
            `text-gray-100  w-80 p-5 mt-2 text-left  text-xl font-medium md:ml-52 z-30 relative rounded-lg ` +
            ` ${galaktisRegular.className}`
          }
        >
          Cyberfiction aims to be a decentralized community that can create new
          values and profits through play in the virtual world.
        </p>
      </div>
      <div className="flex absolute z-20 bottom-10 right-10 cursor-pointer">
        <div className="flex flex-col justify-end relative">
          <button className="bg-pri-green text-white  pl-16 pr-5 py-3 rounded-lg text-xl font-semibold">
            See Works
          </button>
          <Image
            width={200}
            height={200}
            className="  absolute -left-24 -bottom-9"
            src={"/3dPerson/cam.0000.png"}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "80%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};
