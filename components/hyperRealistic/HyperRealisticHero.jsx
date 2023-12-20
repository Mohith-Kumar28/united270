import { cafeDeParis, galaktisRegular } from "@/styles/fonts";
import React from "react";

const HyperRealisticHero = () => {
  return (
    <div className="h-screen relative z-30 bg-pri-pink flex justify-center px-36 py-20 gap-10">
      <div className="w-1/2 bg-black"></div>
      <div className="w-1/2">
        <h2
          className={`text-7xl font-bold text-pri-green ${cafeDeParis.className}`}
        >
          CREATING HYPER-REALISTIC 3D FASHION BESPOKE CREATIONS ~
        </h2>
        <h3 className={`text-5xl text-gray-600 mt-3 ${cafeDeParis.className}`}>
          BRANDS
          <br />
          DESIGNERS
          <br />
          ORG
          <br />
          GAMING
          <br />
          METAVERSE
        </h3>
      </div>
    </div>
  );
};

export default HyperRealisticHero;
