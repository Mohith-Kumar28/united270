import Image from "next/image";
import React, { useState } from "react";
import TeamModal from "./TeamModal";
import SlidingText from "../utils/SlidingText";
import { galaktisRegular } from "@/styles/fonts";
import { motion } from "framer-motion";
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";

const Team = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [selectedPerson, setSelectedPerson] = useState();
  const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 10, delay: 0 });

  const team = [
    {
      name: "~JEFF EMMANUEL",
      role: "Chief Creative Officer & Co- Founder",
      photo: "/images/team/person1.png",
      photoSmall: "",
      brands: "/images/team/person1Brands.png",
      linkedinUrl: "",
      description:
        "With over 18 years of experience in advertising and brand-building, Jeff has been the man behind many iconic campaigns. He has worked on numerous brands like Simon Carter, Puma, Mumbai Indians, Allen Solly, Mia by Tanishq, Louis Phillipe and headed various creative teams both in India and the Middle East. During his stint he has been recognised multiple times by both national and international forums like the Cannes Lions and been featured in the top creatives lists by various agencies.",
    },
    {
      name: "~MANISH CHAWALA",
      role: "Chief Creative Officer & Co- Founder",
      photo: "/images/team/person2.png",
      photoSmall: "",
      brands: "/images/team/person2Brands.png",
      linkedinUrl: "",
      description:
        "With a keen interest and experience in business and entrepreneurship, he has recently diversified himself with the advertising industry. In the past 5 years he has managed and built various accounts across diverse industries. A full-time hustler, Manish is an organised visionary who is passionate about building businesses into brands. His key skills include Account Management, Media Buying and Strategy, and Tech and Media Innovations.",
    },
    {
      name: "~SASHADSOZA",
      role: "Chief Creative Officer & Co- Founder",
      photo: "/images/team/person3.png",
      photoSmall: "/images/team/person3Small.png",
      brands: "/images/team/person3Brands.png",
      linkedinUrl: "",
      description:
        "With over 5 years of experience in the advertising industry, Sasha has worked on some key accounts in a short span. She spearheaded her career by writing for Hindustan Unilever - one of Indias largest and most trusted FMCG brands. She led the communications for their CSR initiatives on Twitter and executive leadership profiles. She later moved on to other noteworthy brands across segments like Automobile, fashion, finance, real estate among many others.",
    },
    {
      name: "~ANTARA SRIVATSA",
      role: "Chief Creative Officer & Co- Founder",
      photo: "/images/team/person4.png",
      photoSmall: "/images/team/person4Small.png",
      brands: "/images/team/person4Brands.png",
      linkedinUrl: "",
      description:
        "With over 8 years of experience in retail and visual merchandising across various marketsin the country, Antara has elevated multiple brands like Tommy Hilfiger, ALDO, Lifestyle. Apart from these she has a keen interest in styling and marketing and has associated with brands like Collective, Louis Phillipe, Mia, Lifestyle and TFM Modelling agency for the same.",
    },
    {
      name: "~SENAPATHI KESAVA",
      role: "Chief Creative Officer & Co- Founder",
      photo: "/images/team/person5.png",
      photoSmall: "",
      brands: "",
      linkedinUrl: "",
      description:
        "With over 22 years of expertise in the IT domain across diverse business verticals, Senapathi is our experienced advisor and mentor. His multi-faceted expertise lies in areas like IT Strategy & Planning, Enterprise Solution Design, and Business Transformation - including Digital Transformation ranging from Big data and Robotics to Apps and Al.",
    },
  ];

  return (
    <div ref={scrollRef}>
      <div className="w-full py-56 overflow-hidden relative">
        <TeamModal
          user={selectedPerson}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <div className=" w-full z-0 ">
          {/* <p className="text-pri-green text-9xl font-bold relative   w-full overflow-hidden">
          FROM THE UNIV
        </p> */}
          <TranslateWrapper>
            <img
              className=" h-[14vmax] object-cover overflow-visible"
              src={"/images/texts/Asset_5.png"}
            />{" "}
            {/* <img
            className=" h-[14vmax] object-cover overflow-visible"
            src={"/images/texts/Asset_5.png"}
          /> */}
          </TranslateWrapper>{" "}
          <div className="flex flex-wrap gap-16 mt-20 relative z-20 justify-center ">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-end   cursor-pointer"
              >
                <div
                  onClick={() => {
                    setSelectedPerson(member), setIsOpen(true);
                  }}
                  className="bg-gray-200 w-20 h-20 md:w-36  md:h-36 relative rounded-full text-xl font-semibold mx-auto flex items-end"
                >
                  <Image
                    width={600}
                    height={600}
                    className="  absolute bottom0 "
                    src={member.photoSmall}
                  />
                </div>
                <span
                  className={`text-center mt-2 w-28 md:w-44 font-bold text-lg text-gray-200 rounded-lg   ${galaktisRegular.className}`}
                >
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="flex absolute z-20 bottom-10 right-10 cursor-pointer">
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
      </div> */}
      </div>
    </div>
  );
};

export default Team;

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "150%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};
