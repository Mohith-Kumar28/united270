import Image from "next/image";
import React from "react";
import { motion, useAnimate } from "framer-motion";
import SlidingText from "../utils/SlidingText";
import { galaktisRegular } from "@/styles/fonts";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Hero = () => {
  return (
    <motion.div className="w-full h-screen flex flex-col justify-end md:justify-center pb-40 overflow-hidden relative">
      <div className=" ">
        {/* <p className="text-pri-green text-9xl font-extrabold   ">
          Text to test here
        </p> */}
        <div className="flex overflow-hidden  relative z-0 mt-12 ">
          <TranslateWrapper>
            <img
              className=" h-[18vmax]  object-cover overflow-visible"
              src={"/images/texts/Asset_1.png"}
            />{" "}
            {/* <img
              className=" h-[18vmax] mx-[1500px]  object-cover overflow-visible"
              src={"/images/texts/Asset_1.svg"}
            />{" "}
            <img
              className=" h-[18vmax] mx-[1500px]  object-cover overflow-visible"
              src={"/images/texts/Asset_1.svg"}
            /> */}
          </TranslateWrapper>
        </div>
        <p
          className={
            `text-gray-100  w-96 p-5 mt-2 text-left  text-xl font-medium md:ml-32 z-30 relative rounded-lg flex gap-8` +
            ` ${galaktisRegular.className}`
          }
        >
          <Link className="" target="_blank" href="/images/hero/playBook.pdf">
            <Image
              width={200}
              height={200}
              className=" "
              src={"/images/hero/playBook.png"}
            />
          </Link>
          We're in the business of making B2B & B2C more H2H - Human to Human.
        </p>
      </div>
      <div className="flex absolute z-20 bottom-10 right-10 cursor-pointer">
        <div className="flex flex-col justify-end relative">
          <Link href={"#modelsHero"}>
            {" "}
            <button className="bg-pri-green text-white  pl-16 pr-5 py-3  text-xl font-semibold flex rounded-full">
              New Work
              <ArrowRightIcon className="w-7 ml-2  text-white" />
            </button>
          </Link>
          <Image
            width={100}
            height={100}
            className="  absolute -left-14 bottom-0"
            src={"/images/hero/heroGirl.png"}
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
      initial={{ translateX: reverse ? "-100%" : "130%" }}
      animate={{ translateX: reverse ? "0%" : "-150%" }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2 overflow-visible"
    >
      {children}
    </motion.div>
  );
};
