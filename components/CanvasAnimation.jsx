// components/CanvasAnimation.js
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CanvasAnimation = () => {
  const canvasRef = useRef(null);
  const imageSeq = { frame: 1 };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const frameCount = 300; // Adjust this according to your image count

    const images = Array.from({ length: frameCount }, (_, i) => {
      const img = new Image();
      img.src = `/3dPerson/cam.${String(i + 1).padStart(4, "0")}.png`;
      return img;
    });
    console.log(images);

    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: 0.15,
        trigger: canvas,
        start: "top top",
        end: "600% top",
      },
      onUpdate: render,
    });

    images[1].onload = render;

    function render() {
      // Clear canvas before rendering
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Scale and draw the current image
      scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
      // Calculate the aspect ratio to fit the image within the canvas
      const aspectRatio = img.width / img.height;
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.width / aspectRatio;

      // Draw the image on the canvas
      ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
    }

    return () => {
      // Cleanup logic if needed
    };
  }, []);

  return <canvas ref={canvasRef} className="max-w-full max-h-full" />;
};

export default CanvasAnimation;
