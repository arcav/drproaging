import Image from "next/image";
import React from "react";
import White from "../../public/WhiteLogo.svg";

export const Logo = () => {
  return (
    <>
      <Image src={White} alt="logo" width={300} height={300}/>
    </>
  );
};
