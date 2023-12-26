// import Image from "next/image";
// import React from "react";
// import { motion, useAnimate } from "framer-motion";
// import SlidingText from "../utils/SlidingText";

// const ModelsHero = () => {
//   return (
//     <div className="w-full h-screen overflow-hidden relative bg-light-orange z-30">
//       <div className="absolute top-1/2 -translate-y-[50%] left-0 w-full z-0 ">
//         {/* <p className="text-pri-green text-9xl font-extrabold   ">
//           Text to test here
//         </p> */}

//         <SlidingText text={"Virtual tranformation of brands"} />
//       </div>

//       <div className="flex gap-x-[500px]  overflow-hidden absolute bottom-0 left-0">
//         {/* <TranslateWrapper reverse>
//           <Image width={600} height={600} src={"/images/models/model1.png"} />
//           <Image width={600} height={600} src={"/images/models/model2.png"} />
//           <Image width={600} height={600} src={"/images/models/model3.png"} />
//           <Image width={600} height={600} src={"/images/models/model4.png"} />
//           <Image width={600} height={600} src={"/images/models/model5.png"} />
//         </TranslateWrapper> */}
//         <TranslateWrapper reverse>
//           <Image width={600} height={600} src={"/images/models/model1.png"} />
//           <Image width={600} height={600} src={"/images/models/model2.png"} />
//           <Image width={600} height={600} src={"/images/models/model3.png"} />
//           <Image width={600} height={600} src={"/images/models/model4.png"} />
//           <Image
//             width={600}
//             height={600}
//             src={"/images/models/model5.png"}
//           />{" "}
//           <Image width={600} height={600} src={"/images/models/model1.png"} />
//           <Image width={600} height={600} src={"/images/models/model2.png"} />
//           <Image width={600} height={600} src={"/images/models/model3.png"} />
//           <Image width={600} height={600} src={"/images/models/model4.png"} />
//           <Image width={600} height={600} src={"/images/models/model5.png"} />
//         </TranslateWrapper>{" "}
//         {/* <TranslateWrapper>
//           <Image width={600} height={600} src={"/images/models/model1.png"} />
//           <Image width={600} height={600} src={"/images/models/model2.png"} />
//           <Image width={600} height={600} src={"/images/models/model3.png"} />
//           <Image width={600} height={600} src={"/images/models/model4.png"} />
//           <Image width={600} height={600} src={"/images/models/model5.png"} />
//         </TranslateWrapper> */}
//         {/* <TranslateWrapper>
//                       <LogoItemsTop />
//                     </TranslateWrapper>
//                     <TranslateWrapper>
//                       <LogoItemsTop />
//                     </TranslateWrapper> */}
//       </div>
//     </div>
//   );
// };

// export default ModelsHero;

// const TranslateWrapper = ({ children, reverse }) => {
//   return (
//     <motion.div
//       initial={{ translateX: reverse ? "-50%" : "50%" }}
//       animate={{ translateX: reverse ? "50%" : "-50%" }}
//       transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//       className="flex  px-2"
//     >
//       {children}
//     </motion.div>
//   );
// };

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import SlidingText from "../utils/SlidingText";
import Image from "next/image";
import { galaktisRegular, sourceSansVariableItalic } from "@/styles/fonts";

const ModelsHero = () => {
  return (
    <div className=" py-56">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section ref={targetRef} className=" h-[400vh] relative z-30">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-light-orange ">
        <motion.div style={{ x }} className="flex  justify-between ">
          <div className="flex w-[100vw] overflow-hidden h-screen relative gap-10 p-20">
            <div className="absolute top-1/2 -translate-y-1/2 ">
              <TranslateWrapper>
                <img
                  className="h-[14vmax]  object-cover overflow-visible  z-10 "
                  src={"/images/texts/Asset_7.png"}
                />
              </TranslateWrapper>
            </div>

            <div className="absolute bottom-0  ">
              <TranslateWrapper reverse>
                <div className="flex ">
                  <Image
                    width={600}
                    height={600}
                    src={"/images/models/model1.png"}
                  />
                  <Image
                    width={600}
                    height={600}
                    src={"/images/models/model2.png"}
                  />
                  <Image
                    width={600}
                    height={600}
                    src={"/images/models/model3.png"}
                  />
                  <Image
                    width={600}
                    height={600}
                    src={"/images/models/model4.png"}
                  />
                  <Image
                    width={600}
                    height={600}
                    src={"/images/models/model5.png"}
                  />
                </div>
              </TranslateWrapper>
            </div>
          </div>
          {models.map((model) => (
            <>
              <ModelCard key={model.name} model={model} />
            </>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModelsHero;

const ModelCard = ({ model }) => {
  return (
    <div className="flex flex-col justify-center  w-[100vw] h-screen relative px-10 pb-28 md:pb-auto overflow-hidden">
      <TranslateWrapper>
        <h3 className="mt-4 text-lg font-medium flex items-end leading-6 text-gray-900">
          <p
            className={`text-pri-green  text-8xl font-semibold relative z-10 bg-white/5 backdrop-blur-lg w-full px-5  ${galaktisRegular.className}`}
          >
            {model.name}
          </p>
        </h3>
        <img
          className=" md:w-[20vw] object-cover overflow-visible"
          src={model.instaImg}
        />
        <h3 className="mt-4 text-lg font-medium flex items-end leading-6 text-gray-900">
          <p
            className={`text-pri-green text   text-8xl font-semibold relative z-10 bg-white/5 backdrop-blur-lg w-full px-5  ${galaktisRegular.className}`}
          >
            {model.name}
          </p>
        </h3>
      </TranslateWrapper>
      <div className="mt-2 p-4 justify-between flex">
        <p
          className={`text-base md:text-lg rounded-lg font-bold p-4 bg-light-orange/80 backdrop-blur-md text-pri-pink w-2/3 relative z-30 ${sourceSansVariableItalic.className}`}
        >
          {model.description}
        </p>
        {/* <Link
        href={model}
        // target="_blank"
        className="cursor-pointer z-10 w-16 md:w-24 h-16 md:h-24 flex justify-center items-center rounded-lg  hover:bg-black/10 text-pri-green transition-colors outline-none"
      >
        <SiLinkedin className="text-4xl md:text-5xl" />
      </Link> */}
      </div>
      <div className="mt-4">
        <Image
          width={600}
          height={600}
          className="object-contain   w-1/2 md:h-full py-20  absolute right-10 md:-right-10 -bottom-3 "
          src={model.photo}
        />
      </div>
      <div className="flex absolute z-20 bottom-10 right-20 cursor-pointer">
        <div className="flex flex-col justify-end relative">
          <button className="bg-pri-pink  pl-16 pr-5 py-2 rounded-xl text-md md:text-xl font-semibold">
            Meet {model.name}
          </button>
          <Image
            width={100}
            height={100}
            className="  absolute -left-12 bottom-0"
            src={"/images/models/model1.png"}
          />
        </div>
      </div>
    </div>
  );
};

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "0%" : "75%" }}
      animate={{ translateX: reverse ? "100%" : "-100%" }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const models = [
  {
    name: "~JORDADAM",
    photo: "/images/models/model1Big.png",
    photoSmall: "",

    instaImg: "/images/models/model1Insta.png",
    description:
      "jord adam takes great pride in his Danish descent and resides in modern-day Copenhagen. He loves to create with his hands, is a baker by profession and a carpenter too. He can effortlessly predict the weather and passionately contributes to efforts against climate change and advocates sustainability through action.",
  },
  {
    name: "~ANNEVE",
    photo: "/images/models/model2Big.png",
    photoSmall: "",

    instaImg: "/images/models/model2Insta.png",
    description:
      "jord adam takes great pride in his Danish descent and resides in modern-day Copenhagen. He loves to create with his hands, is a baker by profession and a carpenter too. He can effortlessly predict the weather and passionately contributes to efforts against climate change and advocates sustainability through action.",
  },
  {
    name: "~KUMAR ADAM",
    photo: "/images/models/model3Big.png",
    photoSmall: "",

    instaImg: "/images/models/model3Insta.png",
    description:
      "Hailing from Kumari Kandam, Kumar Adam is an artist of varying mediums.He is a poet, sculptor, martial artist and archer too.",
  },
  {
    name: "~RARO EVE",
    photo: "/images/models/model4Big.png",
    photoSmall: "",

    instaImg: "/images/models/model4Insta.png",
    description:
      "Raro is from the exotic lost island Nararo. She is an underwater photographer by profession and shell collector by passion. She loves to run, play beach volleyball and reads the weather effortlessly. ",
  },
  {
    name: "~MU EVE",
    photo: "/images/models/model5Big.png",
    photoSmall: "",

    instaImg: "",
    description:
      "This French teacher loves sugar cane and hails from the lost island of Mauritia and is passionate about building boats. During his free time he loves to sing and dance.",
  },
  {
    name: "~WICH EVE",
    photo: "/images/models/model6Big.png",
    photoSmall: "",

    instaImg: "",
    description:
      "Originally from Bermeja island, Wich Eve loves spicy food and tequila. She loves wearing colourful clothes and reading history books in her free time.",
  },
  {
    name: "~NAH ADAM",
    photo: "/images/models/model7Big.png",
    photoSmall: "",

    instaImg: "",
    description:
      "Nah Adam is from the lost island of Nahlapenlohd. He loves to climb trees in his free time and enjoys skiing too.",
  },
  {
    name: "~TAMBU ADAM",
    photo: "/images/models/model8Big.png",
    photoSmall: "",

    instaImg: "",
    description:
      "Tambu adam is a deep sea diver from the lost island of Nuatambu. When he is not swimming with the fishes he is playing his panpipe and volunteering for the climate change cause.",
  },
  {
    name: "~MU EVE",
    photo: "/images/models/model9Big.png",
    photoSmall: "",

    instaImg: "",
    description:
      "Mu eve is from the Japanese Mu island. She loves to sing, fish and is passionate about efforts against climate change.",
  },
];
