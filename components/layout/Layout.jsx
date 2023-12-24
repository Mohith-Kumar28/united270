import React from "react";

import LiquidSideNav from "./LiquidSideNav";
import Image from "next/image";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />

      {children}
    </div>
  );
};

export default Layout;
