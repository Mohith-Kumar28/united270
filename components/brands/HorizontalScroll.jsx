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
          {cards.map((card) => {
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
      className="group relative h-screen flex flex-col justify-center  w-[80vw] overflow-hidden "
    >
      <div className="flex justify-between px-28 absolute z-40 top-4 left-0 w-full">
        <div className="flex gap-10">
          <Image width={50} height={50} src={"/images/brands/xImg.png"} />
          {}
          <card.icon className="w-28 h-28 text-pri-green" />
        </div>
        <div className={`flex font-bold ${sourceSansVariableItalic.className}`}>
          <div className="border-2 rounded-lg p-4 ">
            What they wrote:
            <br />
            lorem ipsum dorem
          </div>
          <div className="border-2 rounded-lg p-4 ">
            What we read:
            <br />
            lorem ipsum dorem
          </div>
          <div className=" rounded-lg p-4 ">What we gave:</div>
        </div>
      </div>

      <Image
        width={700}
        height={700}
        style={{ objectFit: "cover" }}
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

const cards = [
  {
    url: "/images/brands/Asset1.png",
    title: "Title 1",
    whatTheyWrote: "lorem ipsum text here",
    whatWeRead: "lorem ipsum text here",
    icon: SiNike,
    id: 1,
  },
  {
    url: "/images/brands/Asset2.png",
    title: "Title 2",
    whatTheyWrote: "lorem ipsum text here",
    whatWeRead: "lorem ipsum text here",
    icon: SiNike,
    id: 2,
  },
  {
    url: "/images/brands/Asset3.png",
    title: "Title 3",
    whatTheyWrote: "lorem ipsum text here",
    whatWeRead: "lorem ipsum text here",
    icon: SiNike,
    id: 3,
  },
  {
    url: "/images/brands/Asset4.png",
    title: "Title 4",
    whatTheyWrote: "lorem ipsum text here",
    whatWeRead: "lorem ipsum text here",
    icon: SiNike,
    id: 4,
  },
  {
    url: "/images/brands/Asset5.png",
    title: "Title 5",
    whatTheyWrote: "lorem ipsum text here",
    whatWeRead: "lorem ipsum text here",
    icon: SiNike,
    id: 5,
  },
  {
    url: "/images/brands/Asset6.png",
    title: "Title 6",
    whatTheyWrote: "lorem ipsum text here",
    whatWeRead: "lorem ipsum text here",
    icon: SiNike,
    id: 6,
  },
  {
    url: "/images/brands/Asset7.png",
    title: "Title 7",
    whatTheyWrote: "lorem ipsum text here",
    whatWeRead: "lorem ipsum text here",
    icon: SiNike,
    id: 7,
  },
];
