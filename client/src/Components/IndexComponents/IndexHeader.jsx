/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
function IndexHeader() {
  const Navigate = useNavigate();

  return (
    <>
      <header className=" h-24 bg-index-dark rounded-b-lg w-full grid grid-cols-12 ">
        <div className="logo-section col-span-3 grid grid-cols-2 ">
          <div className="logo-image col-span-1 ">
            <span className="h-22 w-22 border-1 ">
              <img src={logo} alt="" />
            </span>
          </div>
          <h1 className="logo-name col-span-1 mt-1 font-mono text-3xl">
            Nerd&apos;s Paradise
          </h1>
        </div>

        <div className="col-span-6"></div>
        <div className="col-span-1  flex flex-col h-[75px] w-full border-4 mt-1 place-content-center mx-auto border-r-custom-slate200 border-b-custom-slate200 border-t-index-slate700 border-l-index-slate700 ">
          <button
            onClick={() => Navigate("/register")}
            className="border-2 p-1 px-1  hover:text-sm  bg-index-lessDark  hover:bg-index-dark font-bold font-mono   border-r-index-slate700 border-b-index-slate700 border-t-index-slate200 border-l-index-slate200  shadow-2xl  hover:shadow-inner"
          >
            Sign Up
          </button>
          <button
            onClick={() => Navigate("/login")}
            className="border-2 p-1 px-1 hover:text-sm   bg-index-lessDark  hover:bg-index-dark font-mono font-bold    border-r-index-slate700 border-b-index-slate700 border-t-index-slate200 border-l-index-slate200 shadow-2xl  hover:shadow-inner"
          >
            Log in
          </button>
        </div>

        <Link
          className="col-span-1 text-start place-content-center mx-auto h-24 text-xl text-black opacity-1  "
          to="/index-about"
        >
          {" "}
          <button className="border-2 p-2 px-3 h-[50px] w-[80px] font-mono  text-xl hover:text-lg hover:font-bold   bg-index-lessDark  hover:bg-index-dark   border-r-index-slate700 border-b-index-slate200 border-t-index-slate700 border-l-index-slate200  shadow-2xl  hover:shadow-inner">
            About{" "}
          </button>
        </Link>
        <Link
          className="col-span-1 text-start place-content-center w-[100px] h-24 text-xl text-black opacity-1  "
          to="/admin"
        >
          {" "}
          <button className="border-2 p-2 px-3 h-[50px] w-full font-mono  text-xl hover:text-lg hover:font-bold   bg-index-lessDark  hover:bg-index-dark   border-r-index-slate700 border-b-index-slate200 border-t-index-slate700 border-l-index-slate200  shadow-2xl  hover:shadow-inner">
            Admin{" "}
          </button>
        </Link>
      </header>
    </>
  );
}

export default IndexHeader;
