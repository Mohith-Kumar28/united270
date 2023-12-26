import React from "react";

import TopNavBar from "@/components/layout/TopNavBar";

const Layout = ({ children }) => {
  return (
    <div className="">
      <TopNavBar />

      {children}
    </div>
  );
};

export default Layout;
