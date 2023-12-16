import Image from "next/image";
import React from "react";
import { motion, useAnimate } from "framer-motion";
import SlidingText from "./utils/SlidingText";

const Hero = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div className="absolute top-1/2 -translate-y-[50%] left-0 w-full z-0 ">
        {/* <p className="text-pri-green text-9xl font-extrabold   ">
          Text to test here
        </p> */}

        <SlidingText text={"this is just a text to "} />
        <p className="text-gray-600 w-36 p-3 mt-8 text-left bg-[#fbcbcc] text-xl font-medium ml-44 ">
          Text to test here
        </p>
      </div>
      <div className="flex absolute z-20 bottom-10 right-10 cursor-pointer">
        <div className="flex flex-col justify-end relative">
          <button className="bg-pri-green  pl-16 pr-5 py-3 rounded-lg text-xl font-semibold">
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
    </div>
  );
};

export default Hero;
