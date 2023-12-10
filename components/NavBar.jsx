// components/Navbar.js
import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between h-16 bg-gray-800 text-white px-4">
      <h3 className="font-bold">CYBERFICTION*</h3>
      <button className="px-4 py-2 rounded bg-black text-white">
        APRIL, 2023
      </button>
    </div>
  );
};

export default NavBar;
