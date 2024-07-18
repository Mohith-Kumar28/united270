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
                      <div className="w-[80vw] flex flex-col justify-center relative ">
                        {/* <ArrowLeftIcon className="w-7 text-pri-green absolute top-1/2 left-0" />
                        <ArrowRightIcon className="w-7 text-pri-green absolute top-1/2 right-0" />
                        <h2
                          className={`relative text-pri-green mb-2 md:mr-8  text-4xl text-right  ${galaktisRegular.className}`}
                        >
                          {item.title}
                          <Link
                            href={"https://www.instagram.com/united_270/"}
                            target="_blank"
                          >
                            <Image
                              width={80}
                              height={80}
                              className="absolute -top-10 -right-24 z-10"
                              src={"/images/logos/Asset_2.png"}
                            />
                          </Link>
                        </h2> */}

                        <div className="flex justify-center  relative h-[70vh]">
                          <video
                            autoPlay
                            muted
                            loop
                            width="900"
                            height="700"
                            className="object-contain"
                            controls
                          >
                            <source src={item.url} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
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
    url: "/images/works/Asset_1.mp4",
    title: "",

    id: 1,
  },
  {
    url: "/images/works/Asset_2.mp4",
    title: "",

    id: 2,
  },
  {
    url: "/images/works/Asset_3.mp4",
    title: "",
    id: 3,
  },
  {
    url: "/images/works/Asset_4.mp4",
    title: "",
    id: 4,
  },
  {
    url: "/images/works/Asset_5.mp4",
    title: "",
    id: 5,
  },
];
