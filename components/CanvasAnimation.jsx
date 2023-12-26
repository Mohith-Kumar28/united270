// // components/CanvasAnimation.js
// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// const CanvasAnimation = () => {
//   const canvasRef = useRef(null);
//   const imageSeq = { frame: 1 };

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const canvas = canvasRef.current;
//     const context = canvas.getContext("2d");
//     const frameCount = 359; // Adjust this according to your image count

//     const images = Array.from({ length: frameCount }, (_, i) => {
//       const img = new Image();
//       img.src = `/3dPerson/cam.${String(i + 1).padStart(4, "0")}.png`;
//       return img;
//     });
//     console.log(images);

//     gsap.to(imageSeq, {
//       frame: frameCount - 1,
//       snap: "frame",
//       ease: "none",
//       scrollTrigger: {
//         scrub: 0.15,
//         trigger: canvas,
//         start: "top top",
//         end: "600% top",
//       },
//       onUpdate: render,
//     });

//     images[1].onload = render;

//     function render() {
//       // Clear canvas before rendering
//       context.clearRect(0, 0, canvas.width, canvas.height);

//       // Scale and draw the current image
//       scaleImage(images[imageSeq.frame], context);
//     }

//     function scaleImage(img, ctx) {
//       // Calculate the aspect ratio to fit the image within the canvas
//       const aspectRatio = img.width / img.height;
//       const canvasWidth = canvas.width;
//       const canvasHeight = canvas.width / aspectRatio;

//       // Draw the image on the canvas
//       ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
//     }

//     return () => {
//       // Cleanup logic if needed
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed w-full h-screen z-20 bottom-0 left-0"
//     />
//   );
// };

// export default CanvasAnimation;

// components/CanvasAnimation.js

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const CanvasAnimation = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const canvasRef = useRef(null);
  const frameCount = 359; // Adjust this according to your image count

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    ScrollTrigger.create({
      trigger: canvas,
      start: "top top",
      end: "+=600%",
      scrub: 0.15,
      onUpdate: (self) => {
        const newFrame = Math.min(
          Math.floor(self.progress * (frameCount - 1)),
          frameCount - 1
        );
        setCurrentFrame(newFrame);
      },
    });

    return () => {
      // Cleanup logic if needed
    };
  }, []);

  useEffect(() => {
    // console.log(currentFrame);
    // const canvas = canvasRef.current;
    // const context = canvas.getContext("2d");
    // const renderImage = () => {
    //   const imgSrc = `/3dPerson/cam.${String(currentFrame + 1).padStart(
    //     4,
    //     "0"
    //   )}.png`;
    //   const img = new Image();
    //   img.src = imgSrc;
    //   img.onload = () => {
    //     const aspectRatio = img.width / img.height;
    //     const canvasWidth = canvas.width;
    //     const canvasHeight = canvasWidth / aspectRatio;
    //     context.clearRect(0, 0, canvas.width, canvas.height);
    //     context.drawImage(img, 0, 0, canvasWidth, canvasHeight);
    //   };
    // };
    // renderImage();
  }, [currentFrame]);

  return (
    <>
      <div className="fixed w-full h-screen z-20 bottom-0 left-0 ">
        <canvas ref={canvasRef} className="w-full h-full" />
        <div className="w-full  h-screen ">
          <Image
            src={`/3dPerson/cam.${String(currentFrame + 1).padStart(
              4,
              "0"
            )}.png`}
            // layout="fill"
            // objectFit="cover"
            width={1000}
            height={1000}
            alt="3D Person"
            className="  object-cover max-w-[100vw] ov fixed w-full h-screen z-20 -bottom-44 md:bottom-0 left-0"
          />
        </div>
      </div>
    </>
  );
};

export default CanvasAnimation;
