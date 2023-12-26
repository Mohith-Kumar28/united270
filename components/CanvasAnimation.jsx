import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const CanvasAnimation = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const canvasRef = useRef(null);
  const frameCount = 359; // Adjust this according to your image count

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imagePromises = [];
        for (let i = 1; i <= frameCount; i++) {
          const img = new Image();
          img.src = `/3dPerson/cam.${String(i).padStart(4, "0")}.png`;
          const promise = new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
          });
          imagePromises.push(promise);
        }
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadImages();

    return () => {
      // Cleanup logic if needed
    };
  }, [frameCount]);

  useEffect(() => {
    if (imagesLoaded) {
      gsap.registerPlugin(ScrollTrigger);

      const canvas = canvasRef.current;

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
    }
  }, [imagesLoaded, frameCount]);

  if (!imagesLoaded) {
    return <div>Loading...</div>; // Placeholder until all images are loaded
  }

  return (
    <div className="fixed w-full h-screen z-20 bottom-0 left-0 ">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="w-full h-screen" style={{ position: "relative" }}>
        <img
          src={`/3dPerson/cam.${String(currentFrame + 1).padStart(4, "0")}.png`}
          alt="3D Person"
          className="object-cover max-w-[100vw] ov fixed w-full h-screen z-20 -bottom-44 md:bottom-0 left-0"
        />
      </div>
    </div>
  );
};

export default CanvasAnimation;
