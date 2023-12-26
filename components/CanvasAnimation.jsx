import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const CanvasAnimation = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const canvasRef = useRef(null);
  const frameCount = 358; // Total image count
  const initialLoadCount = 50; // Initial loaded count

  useEffect(() => {
    const loadImages = async () => {
      try {
        const images = [];
        const imagePromises = [];
        for (let i = 1; i <= initialLoadCount; i++) {
          const imgSrc = `/3dPerson/cam.${String(i).padStart(4, "0")}.png`;
          images.push(imgSrc);
          const promise = new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = reject;
            img.src = imgSrc;
          });
          imagePromises.push(promise);
        }
        await Promise.all(imagePromises);
        setLoadedImages(images);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error loading initial images:", error);
      }
    };

    loadImages();

    return () => {
      // Cleanup logic if needed
    };
  }, []);

  useEffect(() => {
    if (imagesLoaded && loadedImages.length < frameCount) {
      const loadRemainingImages = async () => {
        try {
          const images = [...loadedImages];
          for (let i = loadedImages.length + 1; i <= frameCount; i++) {
            images.push(`/3dPerson/cam.${String(i).padStart(4, "0")}.png`);
          }
          setLoadedImages(images);
        } catch (error) {
          console.error("Error loading remaining images:", error);
        }
      };

      loadRemainingImages();
    }
  }, [imagesLoaded, loadedImages, frameCount]);

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
        {loadedImages.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`Frame ${index + 1}`}
            style={{ display: "none" }} // Hide loaded images
          />
        ))}
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
