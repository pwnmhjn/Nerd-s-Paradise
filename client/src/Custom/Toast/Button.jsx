/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Button = ({ linkName, to }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <NavLink
      to={to}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={({ isActive }) =>
        `border-2   ${isHover ? `font-bold  bg-index-dark shadow-inner  border-l-index-slate700 border-t-index-slate200 border-b-index-slate700 border-r-index-slate200 text-xl  ` : ` ${isActive ? " bg-index-dark shadow-inner font-bold  border-l-index-slate700 border-t-index-slate200 border-b-index-slate700 border-r-index-slate200 text-xl" : " bg-index-lessDark shadow-inner  border-r-index-slate700 border-b-index-slate200 border-t-index-slate700 border-l-index-slate200 text-xl"}`} p-1 m-[1px] px-3 h-fit w-[100px] text-center font-mono`
      }
    >
      {linkName}
    </NavLink>
  );
};

export default Button;
