import Image from "next/image";
import React from "react";
import Black from "../../public/Black.svg";

export const Logo = () => {
  return (
    <div className=" h-[30%] lg:w-[40%] lg:p-2 lg:m-12 mt-3 mx-4 ">
      <Image src={Black} alt="logo" width={800} height={300} />
    </div>
  );
};
