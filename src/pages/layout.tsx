import MobileSideBar from "@/components/layout/Sidebar/MobileSideBar";
import SideBar from "@/components/layout/Sidebar/SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
 

  return (
    <div className="bg-black">
      <div className="md:block hidden">

        <SideBar />
      </div>
      <div className="md:hidden block">
        <MobileSideBar />
      </div>
      <Outlet />
    </div>
  )
}

export default Layout