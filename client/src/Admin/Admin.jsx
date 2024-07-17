import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <div>
      <div className=" h-24 bg-index-dark rounded-b-lg w-full grid grid-cols-4 place-content-center">
        <Link
          className="col-span-1 text-start place-content-center mx-auto h-24 text-xl text-black opacity-1"
          to="."
        >
          <button className="border-2 p-2 px-3 h-[50px] w-[100px] font-mono  text-xl hover:text-lg hover:font-bold   bg-index-lessDark  hover:bg-index-dark   border-r-index-slate700 border-b-index-slate200 border-t-index-slate700 border-l-index-slate200  shadow-2xl  hover:shadow-inner">
            Book
          </button>
        </Link>
        <Link
          className="col-span-1 text-start place-content-center mx-auto h-24 text-xl text-black opacity-1"
          to="author"
        >
          <button className="border-2 p-2 px-3 h-[50px] w-[100px] font-mono  text-xl hover:text-lg hover:font-bold   bg-index-lessDark  hover:bg-index-dark   border-r-index-slate700 border-b-index-slate200 border-t-index-slate700 border-l-index-slate200  shadow-2xl  hover:shadow-inner">
            Author
          </button>
        </Link>
        <NavLink
          className={({ isActive }) =>
            ` col-span-1 place-self-center ${isActive ? " border-l-index-slate700 bg-index-dark border-t-index-slate200 border-b-index-slate700 border-r-index-slate200" : "border-r-index-slate700 border-b-index-slate200 border-t-index-slate700 border-l-index-slate200 "}  mx-auto text-xl opacity-1 border-2 p-2 px-3 h-[50px] w-fit font-mono hover:text-lg hover:font-bold   bg-index-lessDark  hover:bg-index-dark    shadow-2xl  hover:shadow-inner `
          }
          to="chapter"
        >
          Chapter
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            ` col-span-1 place-self-center  mx-auto ${isActive ? "" : "bg-black"} text-xl text-black opacity-1 border-2 p-2 px-3 h-[50px] w-fit font-mono hover:text-lg hover:font-bold   bg-index-lessDark  hover:bg-index-dark   border-r-index-slate700 border-b-index-slate200 border-t-index-slate700 border-l-index-slate200  shadow-2xl  hover:shadow-inner `
          }
          to=".."
        >
          Home
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Admin;
