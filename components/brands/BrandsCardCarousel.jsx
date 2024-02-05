import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import BrandCard from "./BrandCard";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function BrandsCardCarousel({ card }) {
  const [idx, setIdx] = useState(3);
  const [prevIdx, setPrevIdx] = useState(idx);

  const trend = idx > prevIdx ? 1 : -1;

  const cardIndex = Math.abs(idx % BrandsData.length);

  useEffect(() => {
    if (card) {
      setIdx(card.id);
    }
  }, [card]);

  return (
    <div className="h-full w-[100vw]  mx-auto relative ">
      <button
        onClick={() => {
          setPrevIdx(idx);
          setIdx((pv) => pv - 1);
        }}
        className=" transition-colors  text-white p-2 absolute z-10 left-10 rounded-full top-1/2 "
      >
        {/* <FiChevronLeft className="text-3xl" /> */}
        <ArrowLeftIcon className="w-8" />
      </button>

      <div className="absolute  inset-0 z-[5] backdrop-blur-xl">
        <AnimatePresence initial={false} custom={trend}>
          {/* <motion.img
            variants={imgVariants}
            custom={trend}
            initial="initial"
            animate="animate"
            exit="exit"
            key={images[cardIndex].id}
            src={images[cardIndex].src}
            alt={images[cardIndex].title}
            style={{ y: "-50%", x: "-50%" }}
            className="aspect-square max-h-[90%] max-w-[calc(100%_-_80px)] mx-auto bg-black object-cover shadow-2xl absolute left-1/2 top-1/2"
          /> */}
          <BrandCard card={BrandsData[cardIndex]} />
        </AnimatePresence>
      </div>
      <button
        onClick={() => {
          setPrevIdx(idx);
          setIdx((pv) => pv + 1);
        }}
        className=" transition-colors text-white p-2 absolute z-10 right-10 rounded-full top-1/2 "
      >
        {/* <FiChevronLeft className="text-3xl" /> */}
        <ArrowRightIcon className="w-8" />
      </button>
    </div>
  );
}

const imgVariants = {
  initial: (trend) => ({
    x: trend === 1 ? "200%" : "-200%",
    opacity: 0,
  }),
  animate: { x: "-50%", opacity: 1 },
  exit: (trend) => ({
    x: trend === 1 ? "-200%" : "200%",
    opacity: 0,
  }),
};

const titleVariants = {
  initial: (trend) => ({
    y: trend === 1 ? 20 : -20,
    opacity: 0,
  }),
  animate: { y: 0, opacity: 1 },
  exit: (trend) => ({
    y: trend === 1 ? -20 : 20,
    opacity: 0,
  }),
};

const images = [
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    title: "A Title",
    id: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1637141816287-4a55cfeecda2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    title: "Another Title",
    id: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1633774712811-53b489597e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    title: "And Another",
    id: 3,
  },
];

const BrandsData = [
  {
    url: "/images/brands/Asset1.png",
    title: "HT Interiors",
    whatTheyWrote: "Launch the new home furniture collection",
    whatWeRead: "Inspire India to make space for HomeTown in their homes",
    icon: "/images/logos/htInteriors.png",
    id: 0,
  },
  {
    url: "/images/brands/Asset2.png",
    title: "Cult Sport",
    whatTheyWrote: "Launch their run collection",
    whatWeRead: "Give Nike a run its money",
    icon: "/images/logos/cultSport.png",
    id: 1,
  },
  {
    url: "/images/brands/Asset3.png",
    title: "Simon Carter",
    whatTheyWrote: "Show India Simon Carter is quirky too",
    whatWeRead:
      "Create a campaign that makes Simon Carter impossible to forget",
    icon: "/images/logos/simonCarter.png",
    id: 2,
  },
  {
    url: "/images/brands/Asset4.png",
    title: "Chumbak",
    whatTheyWrote: "Reposition the boutique brand into a mass brand",
    whatWeRead: "Make Chumbak a household favourite",
    icon: "/images/logos/Chumbak.png",
    id: 3,
  },
  {
    url: "/images/brands/Asset5.png",
    title: "Van Heusen",
    whatTheyWrote: "Launch the first-ever casual collection",
    whatWeRead: "Show that Vanhuesen means business even when its casual ",
    icon: "/images/logos/vanHeusen.png",
    id: 4,
  },
  {
    url: "/images/brands/Asset6.png",
    title: "John Jacobs",
    whatTheyWrote:
      "Create a campaign that celebrates John Jacobs fine craftsmanship ",
    whatWeRead:
      "Position John Jacobs as the best thing your eyes will see, or wear.",
    icon: "/images/logos/johnJacobs.png",
    id: 5,
  },
  {
    url: "/images/brands/Asset7.png",
    title: "Whistling Woods",
    whatTheyWrote: "Reposition WWI as more than just a film school",
    whatWeRead:
      "Create an iconic campaign that leverages the iconic school’s reputation to establish it as a safe haven for all creative people",
    icon: "/images/logos/whistlingWoods.png",
    id: 6,
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
    url: "/images/brands/Asset9.png",
    title: "Kone",
    whatTheyWrote: "lTalk about KONEs modernisation efforts",
    whatWeRead: "Make KONE a household favourite",
    icon: "/images/logos/kone.png",
    id: 8,
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
];
