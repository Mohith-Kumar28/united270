import { sourceSansVariableItalic } from "@/styles/fonts";
import Image from "next/image";
import React from "react";

const BrandCard = ({ card }) => {
  console.log("card", card);
  return (
    <div
      key={card?.id}
      className="group relative h-screen flex flex-col justify-center gap-28 py-10  w-full overflow-hidden "
    >
      <div className="flex justify-between md:flex-row flex-col gap-20   w-full">
        <div className="flex gap-4 md:gap-3 ">
          <div className="flex flex-col mt-3 ">
            <Image
              width={100}
              height={100}
              alt=""
              src={"/images/logos/united270logo.png"}
              className="object-contain h-20"
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
          className={`text-gray-200 flex md:flex-row flex-col font-bold  ${sourceSansVariableItalic.className}`}
        >
          <div className="border-2 rounded-lg p-4 md:w-[50%]">
            What they wrote:
            <br />
            {card?.whatTheyWrote}
          </div>
          <div className="border-2 rounded-lg p-4 md:w-[50%]">
            What we read:
            <br />
            {card?.whatWeRead}
          </div>
          <div className=" rounded-lg p-4 flex flex-col justify-end">
            What we gave:
          </div>
        </div>
      </div>

      <Image
        width={700}
        height={700}
        alt=""
        style={{ objectFit: "contain" }}
        className="w-full rounded-xl"
        src={card?.url}
      />

      {/* <div className="absolute inset-0 z-10 grid place-content-center">
      <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
        {card?.title}
      </p>
    </div> */}
    </div>
  );
};

export default BrandCard;
