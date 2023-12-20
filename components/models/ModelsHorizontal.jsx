import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import SlidingText from "../utils/SlidingText";
import Image from "next/image";

const content = [
  { title: "title1", features: ["feature 1", "feature 2", "feature 3"] },
  { title: "title1", features: ["feature 1", "feature 2", "feature 3"] },
  { title: "title2", features: ["feature 1", "feature 2", "feature 3"] },
  { title: "title3", features: ["feature 1", "feature 2", "feature 3"] },
  { title: "title4", features: ["feature 1", "feature 2", "feature 3"] },
];
const slider = [{}, {}, {}, {}, {}];

const About = () => {
  return (
    <div className=" py-56">
      <div className="flex gap-12 justify-center">
        {content.map((item, idx) => (
          <div className="flex flex-col">
            <p className="text-pri-green text-2xl font-bold  ">{item.title}</p>
            {item.features.map((feature) => (
              <span className="text-gray-200 text-lg">{feature}</span>
            ))}
          </div>
        ))}
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

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] z-30">
      <div className="sticky top-1/3 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-20 ">
          <SlidingText text={"from the univ"} />
          {/* {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })} */}

          {slider.map((slide, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-end relative  cursor-pointer"
            >
              <Image
                width={200}
                height={200}
                className="  absolute -left-24 -bottom-10"
                src={"/3dPerson/cam.0000.png"}
              />
            </div>
          ))}
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
    title: "Title 1",
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
