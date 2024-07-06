// import Image from "next/image";
// import React from "react";

// const About = () => {
//   const slider = [{}, {}, {}, {}, {}];
//   const content = [
//     { title: "title1", features: ["feature 1", "feature 2", "feature 3"] },
//     { title: "title1", features: ["feature 1", "feature 2", "feature 3"] },
//     { title: "title2", features: ["feature 1", "feature 2", "feature 3"] },
//     { title: "title3", features: ["feature 1", "feature 2", "feature 3"] },
//     { title: "title4", features: ["feature 1", "feature 2", "feature 3"] },
//   ];
//   return (
//     <div className="w-full h-screen overflow-hidden relative ">
//       <div className="absolute top-1/2 -translate-y-[50%] left-0 w-full z-20 pl-28">
//         <div className="flex gap-12 justify-center">
//           {content.map((item, idx) => (
//             <div className="flex flex-col">
//               <p className="text-pri-green text-2xl font-bold  ">
//                 {item.title}
//               </p>
//               {item.features.map((feature) => (
//                 <span className="text-gray-200 text-lg">{feature}</span>
//               ))}
//             </div>
//           ))}
//         </div>
//         <p className="text-pri-green text-9xl font-bold relative   w-full overflow-hidden">
//           FROM THE UNIV
//         </p>

//         <div className="flex gap-20 mt-20 relative z-20 ">
// {slider.map((slide, idx) => (
//   <div
//     key={idx}
//     className="flex flex-col justify-end relative  cursor-pointer"
//   >
//     <button className="bg-pri-green w-52  pl-16 pr-5 py-3 rounded-lg text-xl font-semibold">
//       See Works
//     </button>
//     <Image
//       width={200}
//       height={200}
//       className="  absolute -left-24 -bottom-10"
//       src={"/3dPerson/cam.0000.png"}
//     />
//   </div>
// ))}
//         </div>
//       </div>
//       {/* <div className="flex absolute z-20 bottom-10 right-10 cursor-pointer">
//         <div className="flex flex-col justify-end relative">
//           <button className="bg-pri-green  pl-16 pr-5 py-3 rounded-lg text-xl font-semibold">
//             See Works
//           </button>
//           <Image
//             width={200}
//             height={200}
//             className="  absolute -left-24 -bottom-9"
//             src={"/3dPerson/cam.0000.png"}
//           />
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default About;

import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import SlidingText from "../utils/SlidingText";
import Image from "next/image";
import { galaktisRegular, stretchPro } from "@/styles/fonts";
import ScrollSnap from "scroll-snap";
import useScrollSnap from "react-use-scroll-snap";

const content = [
  {
    title: "BRANDING +CONTENT",
    features: [
      "Brand Launch",
      "Design & Identity",
      "Brand Strategy",
      "Brand Films & AVs",
      "Logo Design & Packaging",
      "Brand Communication",
      "OOH & Events",
      "Production + Shoots",
      "Website Building",
    ],
  },
  {
    title: "STORY TELLING +COHORTS",
    features: [
      " Film Scripting",
      "Digital Film Making",
      "Interactive Content",
      "Content Videos",
      "Social Media Films",
      "Print Media-From Concept",
      "to Creation with In-house",
      "Production Network",
    ],
  },
  {
    title: "DIGITAL MARKETING +AI",
    features: [
      "Market Research",
      "Social Media Marketing",
      "Content Strategy",
      "Media Planning",
      "Campaign Development",
      "Marketing Automation",
      "Performance Marketing",
      "AI Film Making",
      "AI-Gen Lookbooks",
      "Influencer Marketing",
    ],
  },
  {
    title: "DESIGN +TECH",
    features: [
      "Design Research",
      "Motion Design",
      "VFx",
      "AR/VR",
      "3D design & Films",
      "Experience Design",
      "Art Direction",
      "Tech-Integrated Billboards",
      "Holobox Advertising",
      "Web Innovation",
      "Gamification",
    ],
  },
  {
    title: "WEB3 + PHYGITAL",
    features: [
      "Metaworld",
      "Virtual Characters",
      "Digital Brand Ambassadors ",
      "Digital Clothing",
      "3D Fashion Runway",
      "Virtual Collection Launch ",
      "Filters",
      "Product NFTs",
      ,
      "Virtual Campaign Production",
    ],
  },
];
const slider = [{}, {}, {}, {}, {}];

const About = () => {
  return (
    <div className=" py-56 ">
      <div className="pb-72">
        {" "}
        <div className="flex flex-wrap gap-x-3 p-10  gap-y-16 justify-center  relative z-30">
          {content.map((item, idx) => (
            <div className="flex flex-col leading-5">
              <p
                className={`text-pri-green text-xl w-52 mb-4 leading-5 font-bold   ${stretchPro.className}`}
              >
                {item.title}
              </p>
              {item.features.map((feature) => (
                <span
                  className={`text-light-orange flex mt-3  text-lg  ${galaktisRegular.className}`}
                >
                  <span className="   -mt-[23px]"> {feature}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="flex overflow-hidden  relative z-0 ">
          <TranslateWrapper>
            <img
              className="h-[18vmax] object-cover overflow-visible   "
              src={"/images/texts/Asset_3.png"}
            />
            {/* <SlidingText text={"FROM THE UNIVERSE TO THE HUMANVERSE."} /> */}
          </TranslateWrapper>
        </div>
        {/* <p
          className={
            `text-gray-100 bg-black/20 backdrop-blur-3xl p-10 m-20 mt-2 text-left  text-xl font-medium  z-30 relative rounded-lg ` +
            ` ${galaktisRegular.className}`
          }
        >
          So, what is United270 anyway? Just the speed at which brain neurons
          form a thought - 270mph. At United270 Communication Lab, we embody
          this speed and vision. We aim to keep thinking, building small brands
          into big ones and big brands into great ones. We don't just write or
          design, we create - inspired by insights and emotions. Our diverse
          team specializes in impactful storytelling that bridges the gap
          between What you are and What you say, because we go beyond the
          surface. From branding and marketing to AI-integrated campaigns and
          tech innovations, we deliver. #WeAreInTransit, from the universe to
          the humanverse, and we want to take you along. Join us to
          strategically transform your business into a brand.
        </p> */}
      </div>

      {/* <p className="text-pri-green text-9xl font-bold relative   w-full overflow-hidden">
        FROM THE UNIV
      </p> */}
      {/* <SlidingText text={"from the univ"} /> */}

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

  // useScrollSnap({ ref: targetRef, duration: 1, delay: 0 });

  // useEffect(() => {
  //   const element = targetRef.current;
  //   const snapElement = new ScrollSnap(element, {
  //     snapDestinationY: "90%",
  //   });
  // }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-150%"]);

  return (
    <section ref={targetRef} className=" h-[200vh] ">
      <div className="sticky top-1/2 flex h-screen md:items-end  py-36 overflow-hidden z-30">
        <motion.div style={{ x }} className="flex flex-col gap-36 ">
          {/* <img
            className="h-[18vmax] object-cover overflow-visible relative z-10 "
            src={"/images/texts/Asset_3.png"}
          /> */}

          <div className="flex gap-20  relative z-30">
            {slider.map((slide, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-end relative  cursor-pointer"
              >
                <button className="bg-light-orange w-52  pl-16 pr-5 py-8 rounded-full text-xl font-semibold"></button>
                <Image
                  width={100}
                  height={100}
                  className="  absolute -left-14 bottom-0"
                  src={"/images/hero/heroGirl.png"}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default About;

const cards = [
  {
    url: "/images/Asset1.png",
    title: "HT Interiors",
    id: 1,
  },
  {
    url: "/images/Asset1.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/images/Asset1.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/images/Asset1.png",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/images/Asset1.png",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/images/Asset1.png",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/images/Asset1.png",
    title: "Title 7",
    id: 7,
  },
];

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "200%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};
