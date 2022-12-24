import Link from "next/link";
const Button = ({ children }) => {
  return (
    <div className="p-3 mx-auto">
      <Link href={children}>
        <button className="btn btn-wide rounded-md h-10 bg-black shadow-md shadow-black  text-white text-lg font-bold  border-double border-[1px] border-white hover:border-black  hover:bg-white  hover:text-black  hover:shadow-md hover:shadow-black hover:transition hover:ease-linear  delay-100  hover:-translate-y-1 hover:scale-100  duration-700 cursor-pointer">
          {children}
        </button>
      </Link>
    </div>
  );
};

export default Button;
