import Image from "next/image";
import React from "react";

const Brands = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <Image
        width={200}
        height={200}
        className="  absolute right-10 bottom-5"
        src={"/images/brands.png"}
      />
    </div>
  );
};

export default Brands;
