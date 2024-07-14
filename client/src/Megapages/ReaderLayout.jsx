import { Outlet } from "react-router-dom";
import Header from "../Components/ReaderComponents/Layouts/Header";
import Sidebar from "../Components/ReaderComponents/Layouts/Sidebar";
import Footer from "../Components/ReaderComponents/Layouts/Footer";

function ReaderLayout() {
  return (
    <div className="">
      <Header />
      <div className="">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default ReaderLayout;
