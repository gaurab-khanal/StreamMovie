import MobileSideBar from "@/components/layout/Sidebar/MobileSideBar";
import SideBar from "@/components/layout/Sidebar/SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {


  return (
    <div className="bg-black flex md:flex-row flex-col ">
      <div className="md:block hidden">

        <SideBar />
      </div>
      <div className="md:hidden block">
        <MobileSideBar />
      </div>
      <div className=" p-5 ">

        <Outlet />
      </div>
    </div>
  )
}

export default Layout