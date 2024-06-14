import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (

      <div className=" bg-[#b3e2a7]" >
      <Header/>
      <div className="grid grid-cols-12 gap-2 ">
        <Sidebar  />
        <Outlet  />
      </div>
      <Footer />
      </div>

  );
}

export default Layout;
