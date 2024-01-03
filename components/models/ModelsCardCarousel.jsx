import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import ModelCard from "./ModelCard";

export default function ModelsCardCarousel({ card }) {
  const [idx, setIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(idx);

  const trend = idx > prevIdx ? 1 : -1;

  const cardIndex = Math.abs(idx % models.length);

  useEffect(() => {
    console.log(card);
    if (card) {
      setIdx(card.id);
    }
  }, [card]);

  return (
    <div className="h-full w-[80vw] mx-auto relative ">
      <button
        onClick={() => {
          setPrevIdx(idx);
          setIdx((pv) => pv - 1);
        }}
        className="bg-black/50 hover:bg-black/60 transition-colors text-white p-2 absolute z-10 -left-16 rounded-full top-1/2 "
      >
        <FiChevronLeft className="text-3xl" />
      </button>

      <div className="absolute inset-0 z-[5] backdrop-blur-xl">
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
          <ModelCard model={models[cardIndex]} />
        </AnimatePresence>
      </div>
      <button
        onClick={() => {
          setPrevIdx(idx);
          setIdx((pv) => pv + 1);
        }}
        className="bg-black/50 hover:bg-black/60 transition-colors text-white p-2 absolute z-10 -right-16  rounded-full top-1/2"
      >
        <FiChevronRight className="text-3xl" />
      </button>
    </div>
  );
}

const models = [
  {
    name: "~JORDADAM",
    photo: "/images/models/model1Big.png",
    photoSmall: "/images/models/model1.png",
    id: 0,
    instaImg: "/images/models/model1Insta.png",
    description:
      "jord adam takes great pride in his Danish descent and resides in modern-day Copenhagen. He loves to create with his hands, is a baker by profession and a carpenter too. He can effortlessly predict the weather and passionately contributes to efforts against climate change and advocates sustainability through action.",
  },
  {
    name: "~ANNEVE",
    photo: "/images/models/model2Big.png",
    photoSmall: "/images/models/model2.png",
    id: 1,
    instaImg: "/images/models/model2Insta.png",
    description:
      "jord adam takes great pride in his Danish descent and resides in modern-day Copenhagen. He loves to create with his hands, is a baker by profession and a carpenter too. He can effortlessly predict the weather and passionately contributes to efforts against climate change and advocates sustainability through action.",
  },
  {
    name: "~KUMAR ADAM",
    photo: "/images/models/model3Big.png",
    photoSmall: "/images/models/model3.png",
    id: 2,
    instaImg: "/images/models/model3Insta.png",
    description:
      "Hailing from Kumari Kandam, Kumar Adam is an artist of varying mediums.He is a poet, sculptor, martial artist and archer too.",
  },
  {
    name: "~RARO EVE",
    photo: "/images/models/model4Big.png",
    photoSmall: "/images/models/model4.png",
    id: 3,
    instaImg: "/images/models/model4Insta.png",
    description:
      "Raro is from the exotic lost island Nararo. She is an underwater photographer by profession and shell collector by passion. She loves to run, play beach volleyball and reads the weather effortlessly. ",
  },
  {
    name: "~MU EVE",
    photo: "/images/models/model5Big.png",
    photoSmall: "/images/models/model5.png",
    id: 4,
    instaImg: "",
    description:
      "This French teacher loves sugar cane and hails from the lost island of Mauritia and is passionate about building boats. During his free time he loves to sing and dance.",
  },
  {
    name: "~WICH EVE",
    photo: "/images/models/model6Big.png",
    photoSmall: "/images/models/model6.png",
    id: 5,
    instaImg: "",
    description:
      "Originally from Bermeja island, Wich Eve loves spicy food and tequila. She loves wearing colourful clothes and reading history books in her free time.",
  },
  {
    name: "~NAH ADAM",
    photo: "/images/models/model7Big.png",
    photoSmall: "/images/models/model7.png",
    id: 6,
    instaImg: "",
    description:
      "Nah Adam is from the lost island of Nahlapenlohd. He loves to climb trees in his free time and enjoys skiing too.",
  },
  {
    name: "~TAMBU ADAM",
    photo: "/images/models/model8Big.png",
    photoSmall: "/images/models/model8.png",
    id: 7,
    instaImg: "",
    description:
      "Tambu adam is a deep sea diver from the lost island of Nuatambu. When he is not swimming with the fishes he is playing his panpipe and volunteering for the climate change cause.",
  },
  {
    name: "~MU EVE",
    photo: "/images/models/model9Big.png",
    photoSmall: "/images/models/model9.png",
    id: 8,
    instaImg: "",
    description:
      "Mu eve is from the Japanese Mu island. She loves to sing, fish and is passionate about efforts against climate change.",
  },
];
