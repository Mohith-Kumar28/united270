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
        <div className="sticky top-0 flex  h-screen items-center overflow-hidden ">
          <motion.div style={{ x }} className="flex gap-52 ">
            <div className="flex md:flex-row flex-col w-[100vw] relative gap-10 p-20">
              <Image
                width={80}
                height={80}
                className="absolute top-44 -left-5 z-10"
                src={"/images/logos/Asset_2.png"}
              />
              <div className="md:w-1/3 bg-black h-1/3 md:h-full"></div>
              <div className="w-2/3">
                <h2
                  className={`text-5xl md:text-8xl font-bold text-pri-green ${cafeDeParis.className}`}
                >
                  CREATING HYPER-REALISTIC 3D FASHION BESPOKE CREATIONS ~
                </h2>
                <h3
                  className={`text-3xl md:text-7xl text-gray-600 mt-3 ${cafeDeParis.className}`}
                >
                  BRANDS
                  <br />
                  DESIGNERS
                  <br />
                  ORG
                  <br />
                  GAMING
                  <br />
                  METAVERSE
                </h3>
              </div>
            </div>
            <div className=" ">
              <section className="  px-32 flex flex-col justify-center relative z-30">
                <div className="relative h-screen flex gap-36 justify-between py-5   ">
                  {cards.map((item) => {
                    return (
                      <div className="w-[80vw] flex flex-col justify-center relative">
                        <h2
                          className={` text-pri-green mb-2 md:mr-16  text-4xl text-right  ${galaktisRegular.className}`}
                        >
                          {item.title}
                        </h2>
                        <Image
                          width={60}
                          height={60}
                          className="absolute left-0 bottom-0 md:left-auto md:bottom-auto md:-right-16 md:top-28 z-10"
                          src={"/images/logos/Asset_2.png"}
                        />
                        <div className="flex justify-end  relative h-[60vh]">
                          <Image
                            width={900}
                            height={700}
                            // style={{ objectFit: "cover" }}

                            // objectFit="contain"
                            className="object-contain "
                            src={item.url}
                          />
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
    url: "/images/hyperRealistic/Asset_1.png",
    title: "HYPER  REALISTIC  VISUALS",

    id: 1,
  },
  {
    url: "",
    title: "ARCHITECTURAL  WALKTHROUGH",

    id: 2,
  },
  {
    url: "/images/hyperRealistic/Asset_3.png",
    title: "VIRTUAL  AI  TOUR",

    id: 3,
  },
];
