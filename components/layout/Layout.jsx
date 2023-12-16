import React from "react";
import SideBar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <SideBar />
      {children}
    </div>
  );
};

export default Layout;
