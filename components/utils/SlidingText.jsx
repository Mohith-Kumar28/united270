import { cafeDeParis, galaktisRegular } from "@/styles/fonts";
import { motion, useAnimate } from "framer-motion";

const SlidingText = ({ reverse, text }) => (
  <div className="flex  select-none overflow-hidden ">
    <TranslateWrapper reverse={reverse}>
      <span
        className={`w-fit whitespace-nowrap text-[20vmax] font-extrabold uppercase leading-[0.75] text-pri-green  ${cafeDeParis.className}`}
      >
        {text}
      </span>
    </TranslateWrapper>
    <TranslateWrapper reverse={reverse}>
      <span
        className={` w-fit whitespace-nowrap text-[20vmax] uppercase leading-[0.75] text-pri-green text-9xl font-extrabold   ${cafeDeParis.className}`}
      >
        {text}
      </span>
    </TranslateWrapper>
  </div>
);

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
      className="flex"
    >
      {children}
    </motion.div>
  );
};

export default SlidingText;
