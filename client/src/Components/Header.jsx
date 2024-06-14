import { Link } from "react-router-dom";

function Header() {
  return (
    <navbar className="bg-[#6295a2] w-full flex min-h-[75px] rounded-br-lg shadow-md  " >
      <h1 className="">This is Header </h1>&nbsp;
      <Link to="/">Home</Link> &nbsp;
      <Link to="/about">About</Link>
    </navbar>
  );
}

export default Header;
