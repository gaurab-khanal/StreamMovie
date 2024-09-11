import Header from "@/components/layout/Header";
import RightSideBar from "@/components/layout/RightSideBar/RightSideBar";
import MobileSideBar from "@/components/layout/Sidebar/MobileSideBar";
import SideBar from "@/components/layout/Sidebar/SideBar";
import useMenuToggleStore from "@/store/useMenuToggleStore";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { isMenuToggle } = useMenuToggleStore();


  return (
    <div className="bg-black flex md:flex-row flex-col">

      <div className="md:block fixed   hidden">
        <SideBar />
      </div>

      <div className="md:hidden block ">
        <MobileSideBar />
      </div>

      <div className={`py-5 flex flex-col gap-4  w-full pl-5 ${isMenuToggle ? 'md:pl-[100px] ' : 'md:pl-[260px] '}`}>
        <Header />
        <Outlet />
      </div>

      <div className="lg:block hidden">
        <RightSideBar />
      </div>

    </div>
  )
}

export default Layout