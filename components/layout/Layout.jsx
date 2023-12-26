import React from "react";

import NavBar from "@/components/layout/NavBar";

const Layout = ({ children }) => {
  return (
    <div className="">
      <NavBar />

      {children}
    </div>
  );
};

export default Layout;
