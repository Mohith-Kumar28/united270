import React from "react";
import SideBar from "./Sidebar";
import LiquidSideNav from "./LiquidSideNav";
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <div>
      {/* <SideBar /> */}
      <div className=" fixed top-0 left-0 flex justify-between  w-full p-10 z-40">
        <Image width={80} height={80} src={"/images/united270logo.png"} />
        <LiquidSideNav />
      </div>
      {children}
    </div>
  );
};

export default Layout;
