import Image from "next/image";
import React from "react";
import White from "../../public/Black.svg";

export const Logo = () => {
  return (
    <>
      <Image src={White} alt="logo" width={400} height={100} />
    </>
  );
};
