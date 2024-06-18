import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { InfoSection, SignUp, LogIn } from "../Components/IndexComponents";

import { useState } from "react";

function IndexLayout() {
  const [formBoolean, setFormBoolean] = useState(false);

  return (
    <div className="h-fit">
      <header className=" h-24 bg-custom-dark rounded-b-lg w-full grid grid-cols-12 ">
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

        <div className="col-span-7"></div>
        <div className="col-span-1  flex flex-col h-[75px] w-full border-4 mt-1 place-content-center mx-auto border-r-custom-slate200 border-b-custom-slate200 border-t-custom-slate700 border-l-slate-700 ">
          <button
            onClick={() => {
              setFormBoolean(false);
            }}
            className="border-2 p-1 px-1  hover:text-sm  bg-[#538292]  hover:bg-[#6295a2] font-bold font-mono   border-r-custom-slate700 border-b-custom-slate700 border-t-custom-slate200 border-l-custom-slate200  shadow-2xl  hover:shadow-inner"
          >
            Sign Up
          </button>
          <button
            onClick={() => {
              setFormBoolean(true);
            }}
            className="border-2 p-1 px-1 hover:text-sm   bg-[#538292]  hover:bg-[#6295a2] font-mono font-bold    border-r-custom-slate700 border-b-custom-slate700 border-t-custom-slate200 border-l-custom-slate200 shadow-2xl  hover:shadow-inner"
          >
            Log in
          </button>
        </div>

        <Link
          className="col-span-1 text-start place-content-center mx-auto h-24 text-xl text-black opacity-1  "
          to="/about"
        >
          {" "}
          <button className="border-2 p-2 px-3 h-[50px] w-[80px] font-mono  text-xl hover:text-lg hover:font-bold   bg-[#538292]  hover:bg-[#6295a2]   border-r-custom-slate700 border-b-custom-slate200 border-t-custom-slate700 border-l-custom-slate200  shadow-2xl  hover:shadow-inner">
            About{" "}
          </button>
        </Link>
      </header>

      <div className=" text-center h-screen w-full rounded-lg  bg-custom-lessLight m-1  grid grid-cols-12    ">
        <InfoSection />
        {formBoolean ? <LogIn /> : <SignUp />}
      </div>
    </div>
  );
}

export default IndexLayout;
