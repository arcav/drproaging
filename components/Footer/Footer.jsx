import React from "react";
import { SocialIcon } from "react-social-icons";


export const Footer = () => {
  return (
    <div className="bg-black h-40 rounded-b-lg shadow-xl flex justify-around p-6">
      <div className="w-full h-14 flex justify-between lg:w-1/3">
        <SocialIcon
          style={{ height: 40, width: 40 }}
          fgColor="white"
          url="https://www.whatsapp.com/dramanda.castro/"
          className=" bg-white rounded-full  border-white border-x-gray-50 border-2   hover:shadow-xl hover:shadow-white hover:transition hover:ease-linear  delay-100  hover:-translate-y-2 hover:scale-200  duration-700 cursor-pointer"
        />

        <SocialIcon
          style={{ height: 40, width: 40 }}
          className="  bg-white rounded-full  border-white border-x-gray-50 border-2   hover:shadow-xl hover:shadow-white hover:transition hover:ease-linear  delay-100  hover:-translate-y-2 hover:scale-200  duration-700 cursor-pointer"
          url="https://www.instagram.com/dramanda.castro/"
        />
        <SocialIcon
          style={{ height: 40, width: 40 }}
          className=" bg-white rounded-full  border-white border-x-gray-50 border-2    hover:shadow-xl hover:shadow-white hover:transition hover:ease-linear  delay-100  hover:-translate-y-2 hover:scale-200  duration-700 cursor-pointer"
          url="https://www.linkedin.com/dramanda.castro/"
        />
        <SocialIcon
          style={{ height: 40, width: 40 }}
          className=" bg-white rounded-full  border-white border-x-gray-50 border-2 hover  hover:shadow-xl hover:shadow-white hover:transition hover:ease-linear  delay-100  hover:-translate-y-2 hover:scale-200  duration-700 cursor-pointer"
          url="https://www.twitter.com/dramanda.castro/"
        />
      </div>
    </div>
  );
};
