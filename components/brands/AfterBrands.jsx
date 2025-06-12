import { galaktisRegular } from "@/styles/fonts";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const AfterBrands = () => {
  const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 10, delay: 0 });
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);

  return (
    <div ref={scrollRef}>
      <section ref={targetRef} className="relative h-[300vh] z-30 bg-pri-pink">
        <div className="sticky top-0 flex  h-screen items-center overflow-hidden ">
          <motion.div style={{ x }} className="flex gap-52 ">
            <div className=" ">
              <section className="  px-32 flex flex-col justify-center mt-10 relative z-30">
                <div className="relative h-screen flex gap-36 justify-between py-5   ">
                  {cards.map((item) => {
                    return (
                      <div
                        key={item.ytId}
                        className="w-[80vw] flex flex-col justify-center relative "
                      >
                        <div className="flex justify-center  relative h-[70vh]">
                          <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed//${item.ytId}?controls=1&autoplay=0&mute=1&loop=1&playlist=${item.ytId}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AfterBrands;

const cards = [
  {
    ytId: "lnMF-M5fY88",
  },
  {
    ytId: "dv25eM2jR7Q",
  },
  {
    ytId: "zOaRbxMFdh0",
  },
  {
    ytId: "mQwUlVhx1UQ",
  },
  {
    ytId: "-rwJy7jhWUo",
  },
  {
    ytId: "MLwSRzeCB8A",
  },
  {
    ytId: "PQDE9xY4AH0",
  },
  {
    ytId: "7pJIH-tBlcE",
  },
  {
    ytId: "olv1NsIJcww",
  },
  {
    ytId: "XbBoZriYrD4",
  },
  {
    ytId: "C-iJGn5W110",
  },
  {
    ytId: "djuWkgKmfZc",
  },
  {
    ytId: "Zy9_tuJIomg",
  },
];
