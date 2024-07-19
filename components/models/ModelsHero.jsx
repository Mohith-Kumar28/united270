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
import { useRef, useState } from "react";
import SlidingText from "../utils/SlidingText";
import Image from "next/image";
import { galaktisRegular, sourceSansVariableItalic } from "@/styles/fonts";
import ModelsModal from "./ModelsModal";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const ModelsHero = () => {
  return (
    <div className=" ">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const [isOpen, setIsOpen] = useState(false);
  let [selectedModel, setSelectedModel] = useState();

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section
      ref={targetRef}
      id="modelsHero"
      className=" h-[400vh] relative z-30"
    >
      <ModelsModal isOpen={isOpen} setIsOpen={setIsOpen} card={selectedModel} />
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-light-orange ">
        <motion.div style={{ x }} className="flex  justify-between ">
          <div className="flex w-[100vw]  overflow-hidden h-screen relative gap-10 p-20">
            {/* <div className="absolute top-0 right-0 h-full w-32 z-10 bg-gradient-to-l from-light-orange"></div> */}
            <div className="absolute top-1/2 -translate-y-1/4 -mt-28">
              <TranslateWrapper>
                <img
                  className="h-[18vmax]  object-cover overflow-visible  z-10 "
                  src={"/images/texts/Asset_7.png"}
                />
                {/* <img
                  className="h-[18vmax] ml-[1000px] object-cover overflow-visible  z-10 "
                  src={"/images/texts/Asset_7.png"}
                /> */}
              </TranslateWrapper>
              <div className="flex justify-center">
                <Image
                  width={250}
                  height={250}
                  className=""
                  src={"/images/models/logos/AdamEveLogo.svg"}
                />
              </div>
            </div>

            <div className="absolute flex top-0  ">
              <TranslateWrapper reverse>
                <div className="flex ">
                  {brandLogos.map((brand, idx) => (
                    <div
                      key={idx}
                      // onClick={() => {
                      //   setSelectedModel(model);
                      //   setIsOpen(true);
                      // }}
                      className="h-[25vh] cursor-pointer flex items-end w-52  relative z-40"
                    >
                      <Image
                        width={200}
                        height={200}
                        className="object-cover "
                        src={brand.logo}
                      />
                    </div>
                  ))}
                </div>
              </TranslateWrapper>
            </div>

            <div className="absolute flex bottom-0  ">
              <TranslateWrapper>
                <div className="flex ">
                  {models.map((model, index) => (
                    <div
                      key={model.id}
                      onClick={() => {
                        setSelectedModel(model);
                        setIsOpen(true);
                      }}
                      className="h-[25vh] cursor-pointer flex items-end w-60  relative z-40"
                    >
                      <Image
                        // width={600}
                        // height={600}
                        fill={true}
                        className="object-cover overflow-visible"
                        src={model.photoSmall}
                      />
                    </div>
                  ))}
                </div>
              </TranslateWrapper>
            </div>
          </div>
          {models.map((model, index) => (
            <>
              <ModelCard key={model.name} model={model} index={index} />
            </>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModelsHero;

const ModelCard = ({ model, index }) => {
  return (
    <div className="flex flex-col justify-end md:justify-center  w-[125vw] h-screen relative px-0 md:px-[30vw] pb-28 pt-16 overflow-hidden ">
      <div className="flex justify-end">
        <img
          className=" md:w-[20vw] w-[35vw] object-cover overflow-visible"
          src={model.instaImg}
        />
      </div>
      <TranslateWrapper>
        <h3 className="mt-4 text-lg font-medium flex items-end leading-6 text-gray-900 ">
          <p
            className={`text-pri-green  text-7xl  whitespace-nowrap md:text-9xl font-semibold relative z-10  w-full px-5  ${galaktisRegular.className}`}
          >
            {model.name}
          </p>
        </h3>

        <h3 className="mt-4 text-lg font-medium flex items-end leading-6 text-gray-900">
          <p
            className={`text-pri-green text-7xl whitespace-nowrap   md:text-9xl font-semibold relative z-10   w-full px-5  ${galaktisRegular.className}`}
          >
            {model.name}
          </p>
        </h3>
      </TranslateWrapper>
      <div className="mt-4">
        <Image
          width={1000}
          height={1000}
          className="object-contain  w-[60%] md:w-1/3 h-[90vh] md:h-[100vh] py-20  absolute left-56 -bottom-20 "
          src={model.photo}
        />
      </div>

      <div className="mt-2 p-4 w-[65vw] md:w-auto justify-end flex ">
        <p
          className={`text-base md:text-lg rounded-xl border font-bold  p-6 bg-light-orange backdrop-blur-lg  text-pri-pink md:w-4/5  relative z-30 ${sourceSansVariableItalic.className}`}
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
      {index !== 7 && (
        <div className="flex absolute  bottom-10 right-20 cursor-pointer z-30">
          <div className="flex  justify-end relative">
            <button className="bg-pri-pink text-white  pl-16 pr-6 py-3 rounded-full text-md md:text-xl font-semibold">
              Meet {models[index + 1]?.name}
            </button>
            <ArrowRightIcon className="w-6 ml-2 text-pri-pink" />
            <Image
              width={100}
              height={100}
              className="  absolute -left-12 bottom-0"
              src={models[index + 1]?.photoSmall}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "75%" }}
      animate={{ translateX: reverse ? "100%" : "-100%" }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="flex  "
    >
      {children}
    </motion.div>
  );
};

const models = [
  {
    name: "~JORDADAM",
    photo: "/images/models/model1Big.png",
    photoSmall: "/images/models/Asset2small.png",
    id: 0,
    instaImg: "/images/models/model1Insta.png",
    description:
      "jord adam takes great pride in his Danish descent and resides in modern-day Copenhagen. He loves to create with his hands, is a baker by profession and a carpenter too. He can effortlessly predict the weather and passionately contributes to efforts against climate change and advocates sustainability through action.",
  },
  {
    name: "~MU EVE",
    photo: "/images/models/model5Big.png",
    // photoSmall: "/images/models/Asset6small.png",
    photoSmall: "/images/models/Asset1small.png",

    id: 4,
    instaImg: "",
    description:
      "This French teacher loves sugar cane and hails from the lost island of Mauritia and is passionate about building boats. During his free time he loves to sing and dance.",
  },

  {
    name: "~WICH EVE",
    photo: "/images/models/model6Big.png",
    // photoSmall: "/images/models/Asset7small.png",
    photoSmall: "/images/models/Asset7small.png",

    id: 5,
    instaImg: "",
    description:
      "Originally from Bermeja island, Wich Eve loves spicy food and tequila. She loves wearing colourful clothes and reading history books in her free time.",
  },
  {
    name: "~NAH ADAM",
    photo: "/images/models/model7Big.png",
    // photoSmall: "/images/models/Asset8small.png",
    photoSmall: "/images/models/Asset6small.png",

    id: 6,
    instaImg: "",
    description:
      "Nah Adam is from the lost island of Nahlapenlohd. He loves to climb trees in his free time and enjoys skiing too.",
  },
  // {
  //   name: "~MU EVE 2",
  //   photo: "/images/models/model9Big.png",
  //   // photoSmall: "/images/models/Asset10small.png",
  //   photoSmall: "/images/models/Asset9small.png",
  //   id: 8,
  //   instaImg: "",
  //   description:
  //     "Mu eve is from the Japanese Mu island. She loves to sing, fish and is passionate about efforts against climate change.",
  // },
  {
    name: "~TAMBU ADAM",
    photo: "/images/models/model8Big.png",
    photoSmall: "/images/models/Asset8small.png",
    id: 7,
    instaImg: "",
    description:
      "Tambu adam is a deep sea diver from the lost island of Nuatambu. When he is not swimming with the fishes he is playing his panpipe and volunteering for the climate change cause.",
  },
  {
    name: "~ANNEVE",
    photo: "/images/models/model2Big.png",
    // photoSmall: "/images/models/Asset3small.png",
    photoSmall: "/images/models/Asset3small.png",

    id: 1,
    instaImg: "/images/models/model2Insta.png",
    description:
      "jord adam takes great pride in his Danish descent and resides in modern-day Copenhagen. He loves to create with his hands, is a baker by profession and a carpenter too. He can effortlessly predict the weather and passionately contributes to efforts against climate change and advocates sustainability through action.",
  },
  {
    name: "~RARO EVE",
    photo: "/images/models/model4Big.png",
    // photoSmall: "/images/models/Asset5small.png",
    photoSmall: "/images/models/Asset4small.png",

    id: 3,
    instaImg: "/images/models/model4Insta.png",
    description:
      "Raro is from the exotic lost island Nararo. She is an underwater photographer by profession and shell collector by passion. She loves to run, play beach volleyball and reads the weather effortlessly. ",
  },
  {
    name: "~KUMAR ADAM",
    photo: "/images/models/model3Big.png",
    // photoSmall: "/images/models/Asset1small.png",
    photoSmall: "/images/models/Asset5small.png",

    id: 2,
    instaImg: "/images/models/model3Insta.png",
    description:
      "Hailing from Kumari Kandam, Kumar Adam is an artist of varying mediums.He is a poet, sculptor, martial artist and archer too.",
  },
];

const brandLogos = [
  {
    logo: "/images/models/logos/Image_001.png",
  },
  {
    logo: "/images/models/logos/Image_002.png",
  },
  {
    logo: "/images/models/logos/Image_003.png",
  },
  // {
  //   logo: "/images/models/logos/Image_004.png",
  // },
  // {
  //   logo: "/images/models/logos/Image_005.png",
  // },
  {
    logo: "/images/models/logos/Image_006.png",
  },
  // {
  //   logo: "/images/models/logos/Image_007.png",
  // },
  // {
  //   logo: "/images/models/logos/Image_008.png",
  // },
  // {
  //   logo: "/images/models/logos/Image_009.png",
  // },
  // {
  //   logo: "/images/models/logos/Image_010.png",
  // },
  {
    logo: "/images/models/logos/Image_011.png",
  },
  {
    logo: "/images/models/logos/Image_012.png",
  },
  // {
  //   logo: "/images/models/logos/Image_013.png",
  // },
  {
    logo: "/images/models/logos/Image_014.png",
  },
  // {
  //   logo: "/images/models/logos/Image_015.png",
  // },
  {
    logo: "/images/models/logos/Image_016.png",
  },
  // {
  //   logo: "/images/models/logos/Image_017.png",
  // },
  {
    logo: "/images/models/logos/Image_018.png",
  },
  {
    logo: "/images/models/logos/Image_019.png",
  },
  // {
  //   logo: "/images/models/logos/Image_020.png",
  // },
  // {
  //   logo: "/images/models/logos/Image_021.png",
  // },
  // {
  //   logo: "/images/models/logos/Image_022.png",
  // },
  // {
  //   logo: "/images/models/logos/Image_023.png",
  // },
  // {
  //   logo: "/images/models/logos/Image_024.png",
  // },
];
