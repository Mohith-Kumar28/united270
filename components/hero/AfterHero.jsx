// import Image from "next/image";
// import React from "react";
// import { motion, useAnimate } from "framer-motion";

// import { galaktisRegular } from "@/styles/fonts";

// const AfterHero = () => {
//   return (
//     <div className="w-full h-screen overflow-hidden relative">
//       <div className="absolute top-1/2 -translate-y-[50%] left-0 w-full z-0 ">
//         <div className="flex overflow-hidden mt-4">
//           <TranslateWrapper>
//             <div>
//               <img
//                 className=" h-[18vmax] object-contain "
//                 src={"/images/texts/Asset_2.png"}
//               />
//             </div>
//             <img
//               className=" h-[18vmax] object-contain "
//               src={"/images/texts/Asset_2.png"}
//             />
//           </TranslateWrapper>{" "}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AfterHero;

// const TranslateWrapper = ({ children, reverse }) => {
//   return (
//     <motion.div
//       initial={{ translateX: reverse ? "-100%" : "0%" }}
//       animate={{ translateX: reverse ? "0%" : "-100%" }}
//       transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//       className="flex gap-4 px-2"
//     >
//       {children}
//     </motion.div>
//   );
// };

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import Image from "next/image";
import { galaktisRegular, stretchPro } from "@/styles/fonts";
import SlidingText from "../utils/SlidingText";

const AfterHero = () => {
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

  const x = useTransform(scrollYProgress, [0, 1], ["150%", "-150%"]);

  return (
    <section ref={targetRef} className="relative h-[180vh] z-0">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-20  md:-mt-36 ">
          {/* <SlidingText text={"from the univ"} /> */}
          <img
            className=" h-[18vmax] object-cover overflow-visible "
            src={"/images/texts/Asset_2.png"}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AfterHero;
