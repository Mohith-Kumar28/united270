import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const HorizontalScroll = ({
  topChildren,
  bottomChildren,
  horizontalScroll,
  reverse,
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["70%", "-100%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] ">
      <div className="sticky top-0  h-screen justify-center flex flex-col overflow-hidden z-30">
        {topChildren}
        <motion.div style={{ x }} className="flex gap-20 ">
          {horizontalScroll}
        </motion.div>
        {bottomChildren}
      </div>
    </section>
  );
};
