import Image from "next/image";
import React, { useState } from "react";
import TeamModal from "./TeamModal";

const Team = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [selectedPerson, setSelectedPerson] = useState();
  const team = [
    {
      name: "user 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      name: "user 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      name: "user 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      name: "user 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  ];

  return (
    <div className="w-full h-screen overflow-hidden relative ">
      <TeamModal user={selectedPerson} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="absolute top-1/2 -translate-y-[50%] left-0 w-full z-20 pl-28">
        <p className="text-pri-green text-9xl font-bold relative   w-full overflow-hidden">
          FROM THE UNIV
        </p>

        <div className="flex gap-20 mt-20 relative z-20 ">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-end   cursor-pointer"
            >
              <div
                onClick={() => {
                  setSelectedPerson(member), setIsOpen(true);
                }}
                className="bg-white w-36  h-36 relative rounded-full text-xl font-semibold"
              >
                <Image
                  width={600}
                  height={600}
                  className="  absolute -left-1 -bottom-7 "
                  src={"/3dPerson/cam.0000.png"}
                />
              </div>
              <span className="text-center mt-2 font-bold text-lg text-gray-200">
                {member.name}
              </span>
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

export default Team;
