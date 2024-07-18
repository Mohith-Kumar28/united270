import { sourceSansVariableItalic } from "@/styles/fonts";
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
import WearableAccordion from "./WearableAccordion";
import SlidingText from "../utils/SlidingText";
import Link from "next/link";

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

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-pri-pink">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden ">
        <motion.div style={{ x }} className="flex gap-52 ">
          <div className="flex w-[100vw] relative overflow-hidden">
            <Link
              href={"https://www.instagram.com/united_270/"}
              target="_blank"
            >
              <Image
                width={50}
                height={50}
                className="absolute top-10 left-40 z-10"
                src={"/images/logos/Asset_1.png"}
              />
            </Link>
            <div className="absolute z-0  top-1/2 -translate-y-1/2 left-0">
              <SlidingText
                text={
                  "~CLO ~CLO ~CLO ~CLO ~CLO ~CLO ~CLO ~CLO ~CLO ~CLO ~CLO ~CLO"
                }
              />
            </div>
            {/*  */}
            <div className="w-full flex items-center justify-end">
              <Image
                width={600}
                height={600}
                className="w-1/2 relative z-10 m-20"
                src={"/images/wearables/hero.png"}
              />
            </div>
          </div>
          <div className="flex w-[200vw] h-screen ">
            <WearableAccordion />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WearableHorizontalScroll;
