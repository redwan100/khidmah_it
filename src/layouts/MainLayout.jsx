import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";

const MainLayout = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <p className="mt-auto">footer</p>
    </div>
  );
};

export default MainLayout;
