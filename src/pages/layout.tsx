import RightSideBar from "@/components/layout/RightSideBar/RightSideBar";
import MobileSideBar from "@/components/layout/Sidebar/MobileSideBar";
import SideBar from "@/components/layout/Sidebar/SideBar";
import useMenuToggleStore from "@/store/useMenuToggleStore";
import { Outlet } from "react-router-dom";

const Layout = () => {
const {isMenuToggle} = useMenuToggleStore();

  return (
    <div className="bg-black flex md:flex-row flex-col">
      <div className="md:block fixed   hidden">

        <SideBar />
      </div>
      <div className="md:hidden block ">
        <MobileSideBar />
      </div>
      <div className={`py-5 w-full pl-5 ${isMenuToggle ? 'md:pl-[calc(100px)]':  'md:pl-[calc(230px+30px)]'}`}>
        <Outlet />
      </div>
      <div className="lg:block hidden">
        <RightSideBar />
      </div>

    </div>
  )
}

export default Layout