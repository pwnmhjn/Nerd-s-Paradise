import Header from "../Layouts/Header";
import Sidebar from "../Layouts/Sidebar";
import Footer from "../Layouts/Footer";
import { Outlet } from "react-router-dom";

function ReaderLayout() {
  return (
    <div className=" bg-[#b3e2a7]">
      <Header />
      <div className="grid grid-cols-12 gap-2 ">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default ReaderLayout;
