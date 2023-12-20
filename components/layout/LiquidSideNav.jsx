import { useRef, useState } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { motion, useAnimate } from "framer-motion";

const LiquidSideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div className="flex items-center text-white">
        {/* <span className="text-sm">Open nav</span>
        <FiArrowRight className="mr-4 ml-2" /> */}
        <motion.button
          whileHover={{ rotate: "180deg" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="text-3xl bg-white text-black hover:text-pri-green transition-colors p-4 rounded-full "
        >
          <FiMenu />
        </motion.button>
      </div>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const Nav = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* <MouseImageTrail
        renderImageBuffer={50}
        rotationRange={25}
        images={[
          "/images/models/model1.png",
          "/images/models/model2.png",
          "/images/models/model3.png",
          "/images/models/model4.png",
        ]}
      ></MouseImageTrail> */}
      <motion.nav
        className="fixed top-0 bottom-0 left-0 w-screen bg-white"
        animate={isOpen ? "open" : "closed"}
        variants={navVariants}
        initial="closed"
      >
        <motion.button
          className="text-3xl bg-white text-black hover:text-pri-green  border-[1px] border-transparent hover:border-pri-green  transition-colors p-4 rounded-full absolute top-8 right-8"
          whileHover={{ rotate: "180deg" }}
          onClick={() => setIsOpen(false)}
          whileTap={{ scale: 0.9 }}
        >
          <FiX />
        </motion.button>
        <motion.div
          variants={linkWrapperVariants}
          className="flex flex-col gap-4 absolute bottom-8 left-8"
        >
          <NavLink text="Home" />
          <NavLink text="Work" />
          <NavLink text="Careers" />
          <NavLink text="Contact" />
        </motion.div>
      </motion.nav>
    </>
  );
};

const NavLink = ({ text }) => {
  return (
    <motion.a
      className="inline-block z-10 text-slate-800 w-fit font-black text-7xl hover:text-pri-green transition-colors"
      variants={navLinkVariants}
      transition={{
        type: "spring",
        damping: 3,
      }}
      whileHover={{
        y: -15,
        rotate: "-7.5deg",
      }}
      rel="nofollow"
      href="#"
    >
      {text}
    </motion.a>
  );
};

export default LiquidSideNav;

const navVariants = {
  open: {
    x: "0%",
    borderTopLeftRadius: "0vw",
    borderBottomLeftRadius: "0vw",
    opacity: 1,
  },
  closed: {
    x: "100%",
    borderTopLeftRadius: "50vw",
    borderBottomLeftRadius: "50vw",
    opacity: 0,
  },
};

const linkWrapperVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const navLinkVariants = {
  open: { x: 0 },
  closed: { x: 25 },
};

const MouseImageTrail = ({
  children,
  // List of image sources
  images,
  // Will render a new image every X pixels between mouse moves
  renderImageBuffer,
  // images will be rotated at a random number between zero and rotationRange,
  // alternating between a positive and negative rotation
  rotationRange,
}) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Using the Pythagorean theorem to calculate the distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector);

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2
              ? `rotate(${rotation}deg)`
              : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2
              ? `rotate(-${rotation}deg)`
              : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 5 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {children}

      {images.map((img, index) => (
        <img
          className="pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-xl border-2 border-black bg-neutral-900 object-cover opacity-0"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};
