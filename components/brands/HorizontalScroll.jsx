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

const HorizontalScroll = () => {
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

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-pri-pink">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-32">
          {BrandsData.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-screen flex flex-col justify-between py-10  w-[80vw] overflow-hidden "
    >
      <div className="flex justify-between md:flex-row flex-col gap-20   w-full">
        <div className="flex gap-4 md:gap-10 md:pl-20 pt-24">
          <div>
            <Image
              width={50}
              height={50}
              src={"/images/brands/xImg.png"}
              className="object-contain h-20 w-28"
            />
          </div>

          <div className="flex flex-col mt-3 ">
            <Image
              width={200}
              height={200}
              src={card.icon}
              className="object-contain h-20"
            />
          </div>

          {/* <card.icon className="w-28 h-28 text-pri-green" /> */}
        </div>
        <div
          className={`text-light-orange leading-5  flex md:flex-row flex-col font-bold  mt-10 ${sourceSansVariableItalic.className}`}
        >
          <p className="border-2 leading-5 border-light-orange rounded-lg p-4 pr-8 md:w-[50%]">
            What they wrote:
            <br />
            {card.whatTheyWrote}
          </p>
          <div className="border-2 leading-5 border-light-orange rounded-lg p-4 pr-8 md:w-[50%]">
            What we read:
            <br />
            {card.whatWeRead}
          </div>
          <div className=" rounded-lg p-4 flex flex-col justify-end">
            What we gave:
          </div>
        </div>
      </div>

      <Image
        width={700}
        height={700}
        style={{ objectFit: "contain" }}
        className="w-full "
        src={card.url}
      />

      {/* <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div> */}
    </div>
  );
};

export default HorizontalScroll;

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateY: reverse ? "-100%" : "0%" }}
      animate={{ translateY: reverse ? "0%" : "-100%" }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="flex flex-col gap-20 px-2"
    >
      {children}
    </motion.div>
  );
};

const BrandsData = [
  {
    url: "/images/brands/Asset4.png",
    title: "Chumbak",
    whatTheyWrote: "Reposition the boutique brand into a mass brand",
    whatWeRead: "Make Chumbak a household favourite",
    icon: "/images/logos/Chumbak.png",
    id: 3,
  },

  {
    url: "/images/brands/Asset2.png",
    title: "Cult Sport",
    whatTheyWrote: "Launch their run collection",
    whatWeRead: "Give Nike a run for its money",
    icon: "/images/logos/cultSport.png",
    id: 1,
  },
  {
    url: "/images/brands/Asset1.png",
    title: "HT Interiors",
    whatTheyWrote: "Launch the new home furniture collection",
    whatWeRead: "Inspire India to make space for HomeTown in their homes",
    icon: "/images/logos/htInteriors.png",
    id: 0,
  },

  {
    url: "/images/brands/Asset8.png",
    title: "Puma",
    whatTheyWrote: "Launch the official Bangalore Football Club Jersey",
    whatWeRead: "Get our cricket-obsessed country to love football the same",
    icon: "/images/logos/puma.png",
    id: 7,
  },

  {
    url: "/images/brands/Asset10.png",
    title: "Virgio",
    whatTheyWrote:
      "Make a brand launch film that showcases our latest collection",
    whatWeRead:
      "Shoot a memorable film that celebrates the youth and their quirks",
    icon: "/images/logos/virgio.png",
    id: 9,
  },

  {
    url: "/images/brands/Asset9.png",
    title: "Kone",
    whatTheyWrote: "Talk about KONEs modernisation efforts",
    whatWeRead: "Make KONE a household favourite",
    icon: "/images/logos/kone.png",
    id: 8,
  },
];
