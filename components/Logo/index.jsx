import Image from "next/image";
import React from "react";
import Black from "../../public/Black.svg";

export const Logo = () => {
  return (
    <div className="h-1/3 mx-2 flex items-center justify-center">
      <Image src={Black} alt="logo" />
    </div>
  );
};
