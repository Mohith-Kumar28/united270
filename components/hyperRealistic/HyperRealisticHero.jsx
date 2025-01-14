import {
  cafeDeParis,
  galaktisRegular,
  sourceSansVariableItalic,
} from "@/styles/fonts";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import {
  SiNike,
  Si3M,
  SiAbstract,
  SiAdobe,
  SiAirtable,
  SiAmazon,
  SiBox,
} from "react-icons/si";

import SlidingText from "../utils/SlidingText";
import WearableAccordion from "../wearables/WearableAccordion";

import useScrollSnap from "react-use-scroll-snap";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const WearableHorizontalScroll = () => {
  return (
    <div className=" relative z-30">
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div> */}
      <HorizontalScrollCarousel />
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div> */}
    </div>
  );
};

const HyperRealisticHero = () => {
  const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 10, delay: 0 });
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);

  return (
    <div ref={scrollRef}>
      <section ref={targetRef} className="relative h-[300vh] z-30 bg-pri-pink">
        <div className="sticky top-0 flex  h-screen  items-center overflow-x-hidden overflow-y-visible  ">
          <motion.div style={{ x }} className="flex gap-52 ">
            <div className="flex md:flex-row flex-col w-[100vw] relative gap-10 px-16 md:pl-32 py-16 md:pr-28">
              <Image
                width={90}
                height={90}
                className="absolute top-44 -left-6 z-10"
                src={"/images/logos/Asset_2.png"}
              />
              {/* <div className="md:w-1/3 bg-black h-1/3 md:h-full"></div> */}
              <video autoPlay loop muted className=" md:w-1/3 h-1/3 md:h-full">
                <source
                  src="/images/hyperRealistic/heroVideo.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="md:w-[35vw]  pt-36">
                {/* <h2
                  className={`text-5xl  md:text-8xl font-bold text-pri-green ${cafeDeParis.className}`}
                >
                  CREATING
                  <br /> HYPER-REALISTIC
                  <br /> 3D FASHION
                  <br /> BESPOKE
                  <br /> CREATIONS ~
                </h2>{" "}
                <div
                  className={`text-3xl flex flex-col  md:text-6xl text-gray-600 mt-3 ${cafeDeParis.className}`}
                >
                  <h3 className={``}>BRANDS</h3>
                  <h3 className={``}>DESIGNERS</h3>
                  <h3 className={``}>ORG</h3>
                  <h3 className={``}>GAMING</h3>
                  <h3 className={``}>METAVERSE</h3>
                </div> */}
                <Image
                  width={600}
                  height={600}
                  className=""
                  src={"/images/hyperRealistic/Asset_4.png"}
                />
              </div>
            </div>
            <div className=" ">
              <section className="  px-32 flex flex-col justify-center mt-10 relative z-30">
                <div className="relative h-screen flex gap-36 justify-between pt-36   ">
                {cards.map((item) => {
                    return (
                      <div
                        key={item.ytId}
                        className="w-[80vw] flex flex-col justify-center relative "
                      >
                          <ArrowLeftIcon className="w-7 text-pri-green absolute top-1/2 left-0" />
                        <ArrowRightIcon className="w-7 text-pri-green absolute top-1/2 right-0" />
                        <h2
                          className={`relative text-pri-green mb-2 md:mr-8  text-4xl text-right  ${galaktisRegular.className}`}
                        >
                          {item.title}
                          <Link
                            href={"https://www.instagram.com/united_270/"}
                            target="_blank"
                          >
                            <Image
                              width={80}
                              height={80}
                              className="absolute -top-10 -right-24 z-10"
                              src={"/images/logos/Asset_2.png"}
                            />
                          </Link>
                        </h2>
                        <div className="flex justify-center  relative h-[70vh]">
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed//${item.ytId}?controls=1&autoplay=0&mute=1&loop=1&playlist=${item.ytId}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HyperRealisticHero;

const cards = [
  {
    ytId: "wUbgq9hj5AM",
    title: "HYPER  REALISTIC  VISUALS",

    id: 1,
  },
  {
    ytId: "X2S_Kjc2J7k",
    title: "ARCHITECTURAL  WALKTHROUGH",

    id: 2,
  },
  {
    ytId: "27NOU0-UPGc",
    title: "VIRTUAL  AI  TOUR",

    id: 3,
  },
];
