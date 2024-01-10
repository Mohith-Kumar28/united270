import { cafeDeParis, galaktisRegular } from "@/styles/fonts";
import Image from "next/image";
import React from "react";
import SlidingText from "../utils/SlidingText";
import { motion, useAnimate } from "framer-motion";
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";

const LastSection = () => {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 50, delay: 0 });
  return (
    <div
      className=" md:h-screen relative flex flex-col gap-28 overflow-hidden py-16"
      ref={scrollRef}
    >
      <div className="flex md:flex-row flex-col justify-center  px-16 gap-16 md:gap-44 md:pl-44">
        <h2
          className={`text-5xl md:text-7xl font-bold text-light-orange md:w-2/3  ${cafeDeParis.className}`}
        >
          “to have a great idea, have a lot of them.”
        </h2>
        <div>
          {/* <div
            className={`text-3xl text-gray-200 font-regular md:w-1/2 ${galaktisRegular.className}`}
          >
            Shortlisted
            <div className="flex gap-10 mt-4">
              <div className="h-32 w-32">
                <Image
                  width={400}
                  height={400}
                  className="rounded-full overflow-hidden"
                  src={"/images/lastSection/Asset_1.png"}
                />
              </div>{" "}
              <div className="w-28 h-28 flex flex-col justify-start">
                <Image
                  width={200}
                  height={200}
                  className=""
                  src={"/images/lastSection/Asset_3.png"}
                />
                BANGALORE
              </div>{" "}
              <div className="w-28 h-28 flex flex-col justify-start">
                <Image
                  width={200}
                  height={200}
                  className=""
                  src={"/images/lastSection/Asset_2.png"}
                />
                JEDDAH
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="">
        {/* <div className="flex justify-end gap-3">
          <div className="h-20 w-20">
            <Image
              width={400}
              height={400}
              className="rounded-full overflow-hidden"
              src={"/images/lastSection/Asset_4.png"}
            />
          </div>
          <div className="flex flex-col justify-center">
            <p
              className={`text-gray-200  w-64 text-xl  ${galaktisRegular.className}`}
            >
              3d Studio partner
            </p>
          </div>
        </div> */}

        {/* <SlidingText text={"Meet Us Here "} /> */}
        {/* <SlidingText
          text={
            <div className="flex gap-4"> */}
        {/* <div className="w-[700px]">
                <Image
                  width={300}
                  height={200}
                  className=""
                  src={"/images/lastSection/Asset_6.png"}
                />{" "}
              </div>{" "} */}
        <TranslateWrapper>
          <img
            className=" h-[18vmax] object-cover overflow-visible"
            src="/images/texts/Asset_6.png"
          />{" "}
          <Image
            width={400}
            height={200}
            className=" h-[10vmax] object-cover overflow-visible mt-10 mx-10"
            src={"/images/lastSection/Asset_7.png"}
          />
          <div className="flex  flex-col justify-center rounded-xl">
            <div className="flex  rounded-xl gap-10 p-4">
              <div
                className={`text-3xl h-[10vmax] text-gray-800 font-regular md:w-1/2 ${galaktisRegular.className}`}
              >
                Shortlisted
                <div className="flex gap-10 mt-4">
                  {/* <div className="h-28 w-28">
                <Image
                  width={200}
                  height={200}
                  className="rounded-full overflow-hidden"
                  src={"/images/lastSection/Asset_1.png"}
                />
              </div>{" "} */}
                  <div className="w-24 h-24 flex flex-col justify-start">
                    <Image
                      width={200}
                      height={200}
                      className=""
                      src={"/images/lastSection/Asset_3.png"}
                    />
                    {/* BANGALORE */}
                  </div>{" "}
                  <div className="w-24 h-24 flex flex-col justify-start">
                    <Image
                      width={200}
                      height={200}
                      className=""
                      src={"/images/lastSection/Asset_2.png"}
                    />
                    {/* JEDDAH */}
                  </div>
                </div>
              </div>

              <div className="flex  justify-end gap-3">
                <div className=" flex flex-col justify-center">
                  <p
                    className={`text-gray-800   text-xl  ${galaktisRegular.className}`}
                  >
                    3d Studio partner
                  </p>
                </div>
              </div>
              <div className="h-44 w-44">
                <Image
                  width={400}
                  height={400}
                  alt=""
                  className="rounded-full overflow-hidden"
                  src={"/images/lastSection/Asset_4.png"}
                />
              </div>
            </div>
          </div>
          {/* <img
            className=" h-[18vmax] object-cover overflow-visible"
            src={"/images/texts/Asset_6.png"}
          /> */}
        </TranslateWrapper>
        {/* <div className="w-[700px]">
                <Image
                  width={300}
                  height={200}
                  className=""
                  src={"/images/lastSection/Asset_6.png"}
                />{" "}
              </div> */}
        {/* </div>
          }
        /> */}
      </div>
      <div className="flex  md:flex-row flex-col gap-20 justify-center -mt-10 px-10 md:px-28 relative z-30 ">
        {/* <div>
          <Image
            width={300}
            height={200}
            className=""
            src={"/images/lastSection/Asset_7.png"}
          />
        </div> */}
        <div className="flex gap-4 justify-center">
          <div className="flex flex-col justify-center gap-4">
            <div className="h-20 w-20">
              <Image
                width={400}
                height={400}
                className="rounded-full overflow-hidden"
                src={"/images/lastSection/Asset_5.png"}
              />
            </div>
            <div className="h-20 w-20">
              <Image
                width={400}
                height={400}
                className="rounded-full overflow-hidden"
                src={"/images/lastSection/Asset_8.png"}
              />
            </div>
          </div>
          <p
            className={`text-gray-200 w-1/2 bg-white/10 backdrop-blur-3xl p-3 rounded-lg text-lg mt-4 ${galaktisRegular.className}`}
          >
            Studio Space & Locations Curated Talents Model Agencies Meta
            Creative Partner Motion Capture Studio Green Screen Studio + VFX
            Rendering Farm Influencer Agency 3D Body Scan Studio Public
            Relations Agencies
          </p>
        </div>
      </div>
    </div>
  );
};

export default LastSection;

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "50%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="flex gap-10 px-2"
    >
      {children}
    </motion.div>
  );
};
