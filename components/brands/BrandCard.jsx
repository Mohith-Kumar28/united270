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
      <div className="flex  md:flex-row flex-col gap-10   w-full">
        <div className="flex gap-2 md:gap-1 ">
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
              width={90}
              height={90}
              alt=""
              src={"/images/brands/xImg.png"}
              className="object-contain h-24 w-28 -mt-3"
            />
          </div>

          <div className="flex flex-col  ">
            <Image
              width={200}
              height={200}
              alt=""
              src={card?.icon}
              className="object-contain h-20 -ml-5"
            />
          </div>

          {/* <card?.icon className="w-28 h-28 text-pri-green" /> */}
        </div>
        <div
          className={`text-light-orange w-[60vw] flex md:flex-row flex-col font-bold  ${sourceSansVariableItalic.className}`}
        >
          <div className="border  leading-5 rounded-[90px] p-8 md:w-[40%]">
            <span className="font-bold"> What they wrote:</span>
            <br />
            {card?.whatTheyWrote}
          </div>
          <div className="border leading-5 rounded-[90px] p-8 md:w-[40%]">
            <span className="font-bold"> What we read:</span>
            <br />
            {card?.whatWeRead}
          </div>
          <div className=" rounded-lg  pl-8 w-72 flex flex-col  justify-center">
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
          className="w-[70vw] -mt-10 rounded-xl"
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
