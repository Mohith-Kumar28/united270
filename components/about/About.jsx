import Image from "next/image";
import React from "react";

const About = () => {
  const slider = [{}, {}, {}, {}, {}];
  const content = [
    { title: "title1", features: ["feature 1", "feature 2", "feature 3"] },
    { title: "title1", features: ["feature 1", "feature 2", "feature 3"] },
    { title: "title2", features: ["feature 1", "feature 2", "feature 3"] },
    { title: "title3", features: ["feature 1", "feature 2", "feature 3"] },
    { title: "title4", features: ["feature 1", "feature 2", "feature 3"] },
  ];
  return (
    <div className="w-full h-screen overflow-hidden relative ">
      <div className="absolute top-1/2 -translate-y-[50%] left-0 w-full z-20 pl-28">
        <div className="flex gap-12 justify-center">
          {content.map((item, idx) => (
            <div className="flex flex-col">
              <p className="text-pri-green text-2xl font-bold  ">
                {item.title}
              </p>
              {item.features.map((feature) => (
                <span className="text-gray-200 text-lg">{feature}</span>
              ))}
            </div>
          ))}
        </div>
        <p className="text-pri-green text-9xl font-bold relative   w-full overflow-hidden">
          FROM THE UNIV
        </p>

        <div className="flex gap-20 mt-20 relative z-20 ">
          {slider.map((slide, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-end relative  cursor-pointer"
            >
              <button className="bg-pri-green w-52  pl-16 pr-5 py-3 rounded-lg text-xl font-semibold">
                See Works
              </button>
              <Image
                width={200}
                height={200}
                className="  absolute -left-24 -bottom-10"
                src={"/3dPerson/cam.0000.png"}
              />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="flex absolute z-20 bottom-10 right-10 cursor-pointer">
        <div className="flex flex-col justify-end relative">
          <button className="bg-pri-green  pl-16 pr-5 py-3 rounded-lg text-xl font-semibold">
            See Works
          </button>
          <Image
            width={200}
            height={200}
            className="  absolute -left-24 -bottom-9"
            src={"/3dPerson/cam.0000.png"}
          />
        </div>
      </div> */}
    </div>
  );
};

export default About;
