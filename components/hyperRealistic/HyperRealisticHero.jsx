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
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] z-30 bg-pri-pink">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden ">
        <motion.div style={{ x }} className="flex gap-52 ">
          <div className="flex w-[100vw] relative gap-10 p-20">
            <Image
              width={80}
              height={80}
              className="absolute top-44 -left-5 z-10"
              src={"/images/logos/Asset_2.png"}
            />
            <div className="w-1/3 bg-black"></div>
            <div className="w-2/3">
              <h2
                className={`text-8xl font-bold text-pri-green ${cafeDeParis.className}`}
              >
                CREATING HYPER-REALISTIC 3D FASHION BESPOKE CREATIONS ~
              </h2>
              <h3
                className={`text-7xl text-gray-600 mt-3 ${cafeDeParis.className}`}
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
              <div className="relative h-screen flex gap-36 justify-between py-10    overflow-hidden ">
                {cards.map((item) => {
                  return (
                    <div className="w-[80vw] flex flex-col justify-center relative">
                      <h2
                        className={` text-pri-green mb-2 mr-6  text-4xl text-right  ${galaktisRegular.className}`}
                      >
                        {item.title}
                      </h2>
                      <Image
                        width={80}
                        height={80}
                        className="absolute -right-20 top-16 z-10"
                        src={"/images/logos/Asset_2.png"}
                      />
                      <div className="relative h-[60vh]">
                        <Image
                          // width={700}
                          // height={700}
                          // style={{ objectFit: "cover" }}
                          fill={true}
                          objectFit="cover"
                          className=" "
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
