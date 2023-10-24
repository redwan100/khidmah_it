import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
