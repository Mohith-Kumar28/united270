import { sourceSansVariableItalic } from "@/styles/fonts";
import Image from "next/image";
import React from "react";

const BrandCard = ({ card }) => {
  console.log("card", card);
  return (
    <div
      key={card?.id}
      className="group absolute    h-screen flex flex-col justify-start gap-28 py-6 px-4  w-full overflow-hidden "
    >
      <div className="flex  md:flex-row flex-col gap-20   w-full">
        <div className="flex gap-4 md:gap-3 ">
          <div className="flex flex-col  ">
            <Image
              width={90}
              height={90}
              alt=""
              src={"/images/logos/united270logo.png"}
              className="object-contain h-24"
            />
          </div>
          <div>
            <Image
              width={50}
              height={50}
              alt=""
              src={"/images/brands/xImg.png"}
              className="object-contain h-20 w-28"
            />
          </div>

          <div className="flex flex-col mt-3 ">
            <Image
              width={200}
              height={200}
              alt=""
              src={card?.icon}
              className="object-contain h-20"
            />
          </div>

          {/* <card?.icon className="w-28 h-28 text-pri-green" /> */}
        </div>
        <div
          className={`text-gray-200 w-[50vw] flex md:flex-row flex-col font-bold  ${sourceSansVariableItalic.className}`}
        >
          <div className="border rounded-full p-8 md:w-[50%]">
            <span className="font-bold"> What they wrote:</span>
            <br />
            {card?.whatTheyWrote}
          </div>
          <div className="border rounded-full p-8 md:w-[50%]">
            <span className="font-bold"> What we read:</span>
            <br />
            {card?.whatWeRead}
          </div>
          <div className=" rounded-lg p-8 ">
            <span className="font-bold"> What we gave them:</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          width={700}
          height={700}
          alt=""
          style={{ objectFit: "contain" }}
          className="w-[70vw] rounded-xl"
          src={card?.url}
        />
      </div>

      {/* <div className="absolute inset-0 z-10 grid place-content-center">
      <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
        {card?.title}
      </p>
    </div> */}
    </div>
  );
};

export default BrandCard;
