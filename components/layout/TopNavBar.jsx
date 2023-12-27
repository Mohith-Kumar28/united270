import Image from "next/image";
import React from "react";
import {
  SiDiscord,
  SiInstagram,
  SiLinkedin,
  SiX,
  SiYoutube,
} from "react-icons/si";

const TopNavBar = () => {
  return (
    <div className=" fixed top-0 left-0 flex justify-between  w-full px-10  z-40 ">
      <div className="bg-white/10 backdrop-blur-xl p-2 md:p-4">
        <Image
          className=""
          width={90}
          height={90}
          src={"/images/logos/united270logo.png"}
        />
      </div>
      <div>
        <div className="w-full flex flex-wrap gap-4 md:gap-6  bg-white/10 backdrop-blur-xl rounded-md p-3">
          <LogoItem href="" Icon={SiDiscord} />
          <LogoItem href="https://twitter.com/united270?lang=en" Icon={SiX} />
          <LogoItem
            href="https://www.instagram.com/united_270/"
            Icon={SiInstagram}
          />
          <LogoItem
            href="https://www.linkedin.com/company/united270/mycompany/"
            Icon={SiLinkedin}
          />
          <LogoItem
            href="https://www.youtube.com/@United270AdLabs"
            Icon={SiYoutube}
          />
          {/* <LogoItem Icon={SiYoutube} /> */}
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;

const LogoItem = ({ Icon, href }) => {
  return (
    <a
      href={href}
      rel="nofollow"
      target="_blank"
      className=" flex justify-center items-center   text-pri-green transition-colors"
    >
      <Icon className="text-xl md:text-3xl" />
    </a>
  );
};
