import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import Button from "../components/Button";
import { Logo } from "../components/Logo";

export default function Home() {
  return (
    <>
      {/* Header */}
      <div className="bg-black h-10 mx-auto rounded-t-lg shadow-md w-full p-1">
      </div>

      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="flex flex-col justify-center mb-3 lg:flex lg:flex-row lg:mb-10">
        <Button>Contact</Button>
        <Button>About</Button>
        <Button>Blog</Button>
        <Button>Work</Button>
      </div>

      {/* Footer  Refactor Social Icon in One Component lot duplicate code */}
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
    </>
  );
}
