import Image from "next/image";
import React from "react";
import { motion, useAnimate } from "framer-motion";
import SlidingText from "../utils/SlidingText";

const ModelsHero = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative bg-light-orange z-30">
      <div className="absolute top-1/2 -translate-y-[50%] left-0 w-full z-0 ">
        {/* <p className="text-pri-green text-9xl font-extrabold   ">
          Text to test here
        </p> */}

        <SlidingText text={"Virtual tranformation of brands"} />
        {/* <p className="text-gray-600 w-36 p-3 mt-8 text-left bg-[#fbcbcc] text-xl font-medium ml-44 ">
          Text to test here
        </p> */}
      </div>
      {/* <div className="flex absolute z-20 bottom-10 right-10 cursor-pointer">
        <div className="flex flex-col justify-end relative">
          <button className="bg-pri-green  pl-16 pr-5 py-3 rounded-lg text-xl font-semibold">
            See Works
          </button>
          <Image
            width={200}
            height={200}
            className="  absolute -left-24 -bottom-9"
            src={"/images/models/model1.png"}
          />
        </div>
      </div> */}
      <div className="flex gap-x-[500px]  overflow-hidden absolute bottom-0 left-0">
        {/* <TranslateWrapper reverse>
          <Image width={600} height={600} src={"/images/models/model1.png"} />
          <Image width={600} height={600} src={"/images/models/model2.png"} />
          <Image width={600} height={600} src={"/images/models/model3.png"} />
          <Image width={600} height={600} src={"/images/models/model4.png"} />
          <Image width={600} height={600} src={"/images/models/model5.png"} />
        </TranslateWrapper> */}
        <TranslateWrapper reverse>
          <Image width={600} height={600} src={"/images/models/model1.png"} />
          <Image width={600} height={600} src={"/images/models/model2.png"} />
          <Image width={600} height={600} src={"/images/models/model3.png"} />
          <Image width={600} height={600} src={"/images/models/model4.png"} />
          <Image
            width={600}
            height={600}
            src={"/images/models/model5.png"}
          />{" "}
          <Image width={600} height={600} src={"/images/models/model1.png"} />
          <Image width={600} height={600} src={"/images/models/model2.png"} />
          <Image width={600} height={600} src={"/images/models/model3.png"} />
          <Image width={600} height={600} src={"/images/models/model4.png"} />
          <Image width={600} height={600} src={"/images/models/model5.png"} />
        </TranslateWrapper>{" "}
        {/* <TranslateWrapper>
          <Image width={600} height={600} src={"/images/models/model1.png"} />
          <Image width={600} height={600} src={"/images/models/model2.png"} />
          <Image width={600} height={600} src={"/images/models/model3.png"} />
          <Image width={600} height={600} src={"/images/models/model4.png"} />
          <Image width={600} height={600} src={"/images/models/model5.png"} />
        </TranslateWrapper> */}
        {/* <TranslateWrapper>
                      <LogoItemsTop />
                    </TranslateWrapper>
                    <TranslateWrapper>
                      <LogoItemsTop />
                    </TranslateWrapper> */}
      </div>
    </div>
  );
};

export default ModelsHero;

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-50%" : "50%" }}
      animate={{ translateX: reverse ? "50%" : "-50%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex  px-2"
    >
      {children}
    </motion.div>
  );
};
