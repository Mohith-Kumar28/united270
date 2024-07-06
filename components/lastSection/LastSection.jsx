import { cafeDeParis, galaktisRegular } from "@/styles/fonts";
import Image from "next/image";
import React from "react";
import SlidingText from "../utils/SlidingText";
import { motion, useAnimate, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";

const LastSection = () => {
  const scrollRef = useRef(null);

  // useScrollSnap({ ref: scrollRef, duration: 10, delay: 0 });
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);
  // useScrollSnap({ ref: scrollRef, duration: 50, delay: 0 });
  return (
    <div ref={scrollRef}>
      <section ref={targetRef} className="relative h-[200vh] z-30 ">
        <div className="sticky top-0 flex  h-screen items-center overflow-hidden ">
          <motion.div style={{ x }} className="flex gap-52 ">
            <div className="flex md:flex-row flex-col  relative gap-10  md:pl-32 py-16  md:pr-28">
              <div
                className=" md:h-screen z-50 w-[150vw] bg-pri-pink relative flex flex-col gap-28  h-auto py-16"
                ref={scrollRef}
              >
                <div className="flex md:flex-row flex-col justify-center  px-16 pt-16 gap-16 md:gap-44 md:pl-44">
                  <h2
                    className={`text-5xl md:text-7xl font-bold text-right text-light-orange md:w-2/3  ${cafeDeParis.className}`}
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
                <div className="-mt-52 md:mt-0"></div>
                <div className="flex  md:flex-row flex-col gap-20 justify-center -mt-10 px-0 md:px-28 relative z-30 ">
                  <div className="flex gap-9 justify-center">
                    <div
                      className={`flex flex-col text-2xl justify-start gap-4 ml-6 ${galaktisRegular.className}`}
                    >
                      Shortlisted
                      <div className="h-14 w-14">
                        <Image
                          width={200}
                          height={200}
                          className="rounded-full overflow-hidden"
                          src={"/images/lastSection/Asset_1.png"}
                        />
                      </div>
                      <div className="h-14 w-14">
                        <Image
                          width={200}
                          height={200}
                          className="rounded-full overflow-hidden"
                          src={"/images/lastSection/Asset_4.png"}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-10">
                        <div
                          className={`text-md  font-regular md:w-1/2 ${galaktisRegular.className}`}
                        >
                          <div className="w-14 h-14 flex flex-col justify-start">
                            <Image
                              width={200}
                              height={200}
                              className=""
                              src={"/images/lastSection/Asset_3.png"}
                            />
                            Bangalore mumbai
                          </div>
                        </div>{" "}
                        <div
                          className={`text-md  font-regular md:w-1/2 ${galaktisRegular.className}`}
                        >
                          <div className="w-14 h-14 flex flex-col justify-start">
                            <Image
                              width={200}
                              height={200}
                              className=""
                              src={"/images/lastSection/Asset_2.png"}
                            />
                            JEDDAH
                          </div>
                        </div>
                      </div>
                      <p
                        className={`text-gray-200 pr-9  rounded-lg md:text-lg mt-16 ${galaktisRegular.className}`}
                      >
                        Studio Space & Locations Curated Talents Model Agencies
                        Meta Creative Partner Motion Capture Studio Green Screen
                        Studio + VFX Rendering Farm Influencer Agency 3D Body
                        Scan Studio Public Relations Agencies
                      </p>
                    </div>
                  </div>

                  {/* <TranslateWrapper>
                    <img
                      className=" h-[8vmax] object-cover overflow-visible mx-72"
                      src="/images/texts/Asset_6.png"
                    />
                  </TranslateWrapper> */}
                  <div
                    className={`text-8xl text-pri-green w-full ${cafeDeParis.className}`}
                  >
                    MEET US HERE
                  </div>
                  <div className="md:w-[100vw]  flex gap-20 justify-start pl-8  mb-10">
                    <div className=" ">
                      <Image
                        width={100}
                        height={100}
                        className=""
                        src={"/images/lastSection/Asset_10.svg"}
                      />{" "}
                    </div>
                    <div>
                      <Image
                        width={200}
                        height={200}
                        className=" "
                        src={"/images/lastSection/Asset_6.png"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" "></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LastSection;

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "50%" }}
      animate={{ translateX: reverse ? "0%" : "-300%" }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="flex gap-10 px-2"
    >
      {children}
    </motion.div>
  );
};
