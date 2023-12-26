import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const CanvasAnimation = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(20); // Initial loaded count
  const canvasRef = useRef(null);
  const frameCount = 358; // Total image count

  useEffect(() => {
    const loadInitialImages = async () => {
      try {
        const imagePromises = [];
        for (let i = 1; i <= loadedCount; i++) {
          const promise = new Promise((resolve) => {
            const img = document.createElement("img");
            img.onload = resolve;
            img.src = `/3dPerson/cam.${String(i).padStart(4, "0")}.png`;
          });
          imagePromises.push(promise);
        }
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error loading initial images:", error);
      }
    };

    loadInitialImages();

    return () => {
      // Cleanup logic if needed
    };
  }, [loadedCount]);

  useEffect(() => {
    if (imagesLoaded && loadedCount < frameCount) {
      const loadRemainingImages = async () => {
        try {
          const remainingImages = [];
          for (let i = loadedCount + 1; i <= frameCount; i++) {
            const promise = new Promise((resolve) => {
              const img = document.createElement("img");
              img.onload = resolve;
              img.src = `/3dPerson/cam.${String(i).padStart(4, "0")}.png`;
            });
            remainingImages.push(promise);
          }
          await Promise.all(remainingImages);
          setImagesLoaded(true);
        } catch (error) {
          console.error("Error loading remaining images:", error);
        }
      };

      loadRemainingImages();
      setLoadedCount(frameCount); // Update loaded count to all images
    }
  }, [imagesLoaded, frameCount, loadedCount]);

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
        <Image
          src={`/3dPerson/cam.${String(currentFrame + 1).padStart(4, "0")}.png`}
          alt="3D Person"
          width={1000}
          height={1000}
          className="object-cover max-w-[100vw] ov fixed w-full h-screen z-20 -bottom-44 md:bottom-0 left-0"
        />
      </div>
    </div>
  );
};

export default CanvasAnimation;
