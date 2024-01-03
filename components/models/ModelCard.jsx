import { galaktisRegular, sourceSansVariableItalic } from "@/styles/fonts";
import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";

const ModelCard = ({ model }) => {
  return (
    <div className="flex flex-col justify-between md:justify-center  w-[90vw] h-screen relative px-10 py-28 overflow-visible ">
      {/* <TranslateWrapper> */}
      <div className="flex relative z-0">
        <h3 className="mt-4 text-lg font-medium flex items-end leading-6 text-gray-900 ">
          <p
            className={`text-pri-green  text-6xl   md:text-8xl font-semibold relative z-10  w-full px-5  ${galaktisRegular.className}`}
          >
            {model?.name}
          </p>
        </h3>
        <img
          className=" md:w-[20vw] w-[50vw] object-cover overflow-visible"
          src={model?.instaImg}
        />
        <h3 className="mt-4 text-lg font-medium flex items-end leading-6 text-gray-900">
          <p
            className={`text-pri-green text-6xl   md:text-8xl font-semibold relative z-10   w-full px-5  ${galaktisRegular.className}`}
          >
            {model?.name}
          </p>
        </h3>
      </div>
      {/* </TranslateWrapper> */}
      <div className="mt-2 p-4 justify-between flex">
        <p
          className={`text-base md:text-lg rounded-lg font-bold p-4 bg-light-orange/80 backdrop-blur-md text-pri-pink md:w-2/3 relative z-30 ${sourceSansVariableItalic.className}`}
        >
          {model?.description}
        </p>
        {/* <Link
        href={model}
        // target="_blank"
        className="cursor-pointer z-10 w-16 md:w-24 h-16 md:h-24 flex justify-center items-center rounded-lg  hover:bg-black/10 text-pri-green transition-colors outline-none"
      >
        <SiLinkedin className="text-4xl md:text-5xl" />
      </Link> */}
      </div>
      <div className="mt-4">
        <Image
          width={600}
          height={600}
          className="object-contain  w-[60%] md:w-1/2 md:h-[90vh] py-20  absolute right-2 md:-right-10 bottom-16 "
          src={model?.photo}
        />
      </div>
      <div className="flex absolute  bottom-10 right-20 cursor-pointer z-30">
        <div className="flex flex-col justify-end relative">
          <button className="bg-pri-pink text-white  pl-16 pr-5 py-2 rounded-xl text-md md:text-xl font-semibold">
            Meet {model?.name}
          </button>
          <Image
            width={100}
            height={100}
            className="  absolute -left-12 bottom-0"
            src={"/images/models/model1.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default ModelCard;

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "75%" }}
      animate={{ translateX: reverse ? "100%" : "-100%" }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="flex  "
    >
      {children}
    </motion.div>
  );
};
