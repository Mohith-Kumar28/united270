import { FiBarChart, FiBell, FiDollarSign, FiPlay } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "../utils/UseWindowSize";
import { useState } from "react";
import { galaktisRegular } from "@/styles/fonts";
import Image from "next/image";
import Link from "next/link";

const WearableAccordion = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="  px-32 flex flex-col pt-14 justify-center relative z-30">
      <h2
        className={` text-pri-green mr-4  relative mb-0 text-4xl text-right  ${galaktisRegular.className}`}
      >
        INTEROPERABLE WEARABLES &AVATARS
        <Link
          className=""
          href={"https://www.instagram.com/united_270/"}
          target="_blank"
        >
          <Image
            width={80}
            height={80}
            className="absolute  -top-5 -right-24 z-10"
            src={"/images/logos/Asset_1.png"}
          />
        </Link>
      </h2>
      <div className="flex flex-col   lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto  overflow-hidden mt-10">
        {/* {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              Icon={item.Icon}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
            />
          );
        })} */}
        <Image
          width={700}
          height={700}
          alt=""
          style={{ objectFit: "contain" }}
          className="w-[80vw] rounded-xl "
          src={"/images/wearables/wearablesAvatar.png "}
        />
      </div>
    </section>
  );
};

const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-light-orange hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group text-pri-pink "
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className={`hidden lg:block text-xl font-bold rotate-180 ${galaktisRegular.className}`}
        >
          {title}
        </span>
        <span
          className={`block lg:hidden text-xl font-bold ${galaktisRegular.className}`}
        >
          {title}
        </span>
        <div className="w-6 lg:w-full aspect-square bg-pri-pink text-white grid place-items-center">
          <Icon />
        </div>
        <span className="w-4 h-4 bg-pri-green group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className={`px-4 py-2 hidden md:block bg-white/5 backdrop-blur-lg text-white ${galaktisRegular.className}`}
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WearableAccordion;

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items = [
  {
    id: 1,
    title: "Formals",
    Icon: FiDollarSign,
    imgSrc: "images/wearables/formal.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
  {
    id: 2,
    title: "Title 2",
    Icon: FiPlay,
    imgSrc: "images/wearables/formal.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
  {
    id: 3,
    title: "Title 3",
    Icon: FiBell,
    imgSrc: "images/wearables/formal.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
  {
    id: 4,
    title: "Title 3",
    Icon: FiBarChart,
    imgSrc: "images/wearables/formal.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
];
