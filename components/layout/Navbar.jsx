import Image from "next/image";
import React from "react";
import {
  SiDiscord,
  SiInstagram,
  SiLinkedin,
  SiX,
  SiYoutube,
} from "react-icons/si";

const NavBar = () => {
  return (
    <div className=" fixed top-0 left-0 flex justify-between  w-full px-10  z-40 ">
      <div className="bg-white/10 backdrop-blur-xl p-4">
        <Image
          className=""
          width={90}
          height={90}
          src={"/images/logos/united270logo.png"}
        />
      </div>
      <div>
        <div className="inline-flex gap-6  bg-white/10 backdrop-blur-xl rounded-md p-3">
          <LogoItem Icon={SiDiscord} />
          <LogoItem Icon={SiX} />
          <LogoItem Icon={SiInstagram} />
          <LogoItem Icon={SiLinkedin} />
          <LogoItem Icon={SiYoutube} />
          {/* <LogoItem Icon={SiYoutube} /> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

const LogoItem = ({ Icon }) => {
  return (
    <a
      href="/"
      rel="nofollow"
      target="_blank"
      className=" flex justify-center items-center   text-pri-green transition-colors"
    >
      <Icon className="text-3xl" />
    </a>
  );
};
