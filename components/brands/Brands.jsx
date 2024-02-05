import Image from "next/image";
import React, { useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import BrandsModal from "./BrandsModal";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
const Brands = () => {
  const [isOpen, setIsOpen] = useState(false);
  let [selectedBrand, setSelectedBrand] = useState();
  const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 10, delay: 1 });
  return (
    <motion.div
      ref={scrollRef}
      className="px-10  flex justify-end h-screen overflow-hidden relative z-30"
    >
      <BrandsModal isOpen={isOpen} setIsOpen={setIsOpen} card={selectedBrand} />
      <div>
        {" "}
        <TranslateWrapper reverse>
          <div className="flex flex-col justify-center">
            <div className="relative    mr-7">
              <div className="h-screen">
                <Image
                  width={100}
                  height={400}
                  className="  absolute right-0 -bottom-3 -z-10 h-screen w-72 "
                  src={"/images/brands/BrandLogos.svg"}
                />
              </div>{" "}
              {BrandsData.map((brand) => (
                <>
                  <div
                    onClick={() => {
                      setSelectedBrand(brand);
                      setIsOpen(true);
                    }}
                    key={brand.id}
                    className="cursor-pointer w-40 h-20  "
                  ></div>
                </>
              ))}
            </div>{" "}
          </div>
        </TranslateWrapper>
      </div>

      {/* </div> */}

      {/* <TranslateWrapper reverse>
        {BrandsData.map((brand) => (
          <>
            <Image
              onClick={() => {
                setSelectedBrand(brand);
                setIsOpen(true);
              }}
              key={brand.id}
              width={250}
              height={250}
              alt="brand logo"
              className="cursor-pointer w-28"
              src={brand.icon}
            />
          </>
        ))}{" "}
        {BrandsData.map((brand) => (
          <>
            <Image
              onClick={() => {
                setSelectedBrand(brand);
                setIsOpen(true);
              }}
              key={brand.id}
              width={250}
              height={250}
              alt="brand logo"
              className="cursor-pointer w-28"
              src={brand.icon}
            />
          </>
        ))}{" "}
        {BrandsData.map((brand) => (
          <>
            <Image
              onClick={() => {
                setSelectedBrand(brand);
                setIsOpen(true);
              }}
              key={brand.id}
              width={250}
              height={250}
              alt="brand logo"
              className="cursor-pointer w-28"
              src={brand.icon}
            />
          </>
        ))}
      </TranslateWrapper> */}
    </motion.div>
  );
};

export default Brands;

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateY: reverse ? "-50%" : "0%" }}
      animate={{ translateY: reverse ? "0%" : "-100%" }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="flex flex-col gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const BrandsData = [
  {
    url: "/images/brands/Asset5.png",
    title: "Van Heusen",
    whatTheyWrote: "Launch the first-ever casual collection",
    whatWeRead: "Show that Vanhuesen means business even when its casual ",
    icon: "/images/logos/vanHeusen.png",
    id: 4,
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
    url: "/images/brands/Asset3.png",
    title: "Simon Carter",
    whatTheyWrote: "Show India Simon Carter is quirky too",
    whatWeRead:
      "Create a campaign that makes Simon Carter impossible to forget",
    icon: "/images/logos/simonCarter.png",
    id: 2,
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
    url: "/images/brands/Asset7.png",
    title: "Whistling Woods",
    whatTheyWrote: "Reposition WWI as more than just a film school",
    whatWeRead:
      "Create an iconic campaign that leverages the iconic school’s reputation to establish it as a safe haven for all creative people",
    icon: "/images/logos/whistlingWoods.png",
    id: 6,
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
    url: "/images/brands/Asset9.png",
    title: "Kone",
    whatTheyWrote: "lTalk about KONEs modernisation efforts",
    whatWeRead: "Make KONE a household favourite",
    icon: "/images/logos/kone.png",
    id: 8,
  },
];
