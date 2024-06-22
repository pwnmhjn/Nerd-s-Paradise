import { Outlet } from "react-router-dom";
import Header from "../Components/ReaderComponents/Layouts/Header";
import Sidebar from "../Components/ReaderComponents/Layouts/Sidebar";
import Footer from "../Components/ReaderComponents/Layouts/Footer";

function ReaderLayout() {
  return (
    <div className="h-fit grid grid-rows-12 bg-author-lessLight">
      <Header />
      <div className="row-span-10 grid grid-cols-12">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default ReaderLayout;
