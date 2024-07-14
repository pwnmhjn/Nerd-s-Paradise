import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="w-full flex rounded-b-lg   bg-index-slate700 p-1 h-24">
        <div className="icon min-w-72   m-1">
          <img
            className="h-28 ml-2   hover:h-32 transition-transform duration-300 ease-in-out transform hover:scale-125 "
            src={logo}
            alt=""
          />
        </div>
        <div className="search w-full  m-1  ">
          <div className="flex mr-14 items-center justify-center h-full">
            <input
              className="  w-[600px] outline-none  hidden lg:block bg-slate-600 place-self-center  rounded-xl h-12 p-2"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="sandwich min-w-20 flex  flex-shrink-0   place-content-center  m-1">
          <span className="place-content-center justify-center">
            <FaBars className=" text-3xl   text-index-slate200  hover:text-white  hover:text-4xl  transition-transform duration-300 ease-in-out transform hover:scale-125 " />
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
