import { sourceSansVariableItalic } from "@/styles/fonts";
import Image from "next/image";
import React from "react";

const BrandCard = ({ card }) => {
  console.log("card", card);
  return (
    <div
      key={card?.id}
      className="group relative h-screen flex flex-col justify-between py-10  w-[80vw] overflow-hidden "
    >
      <div className="flex justify-between md:flex-row flex-col gap-20   w-full">
        <div className="flex gap-4 md:gap-10 md:pl-20">
          <div>
            <Image
              width={50}
              height={50}
              src={"/images/brands/xImg.png"}
              className="object-contain h-20 w-28"
            />
          </div>

          <div className="flex flex-col mt-3 ">
            <Image
              width={200}
              height={200}
              src={card?.icon}
              className="object-contain h-20"
            />
          </div>

          {/* <card?.icon className="w-28 h-28 text-pri-green" /> */}
        </div>
        <div
          className={`text-gray-200 flex md:flex-row flex-col font-bold mt-10 ${sourceSansVariableItalic.className}`}
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
        style={{ objectFit: "contain" }}
        className="w-full "
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
