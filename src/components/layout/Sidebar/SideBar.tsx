import { MdMenu } from "react-icons/md";
import GoogleSignIn from "@/components/GoogleSignIn";
import { NavBarItems } from "@/constants/NavBarItems";
import MenuItem from "./MenuItem";
import { useNavigate } from "react-router-dom";
import useMenuToggleStore from "@/store/useMenuToggleStore";

const SideBar = () => {
    const navigate = useNavigate();
    const {isMenuToggle, toggleMenu}= useMenuToggleStore();

    return (
        <div className={`h-screen flex items-center  flex-col justify-between border-black md:border-r-gray-dark/50 p-5 md:border-r-[0.5px] bg-black  sm:w-[70px] transition-all ${!isMenuToggle && 'md:w-[230px]'} ${isMenuToggle && 'md:w-[70px]'}`}>
            <div className="flex flex-col justify-center items-start gap-10">
                <header className="flex gap-3 items-center  justify-start">
                    <div
                        className={`${isMenuToggle ? 'hidden' : 'md:flex'}  hidden  gap-3 items-center justify-center`}
                        onClick={() => navigate("/home/movies")}
                    >
                        <img
                            src="/logo.png"
                            alt="logo"
                            className={` w-6 h-6 `}
                        />
                        <h3 className={` text-white text-lg xl:text-lg xl:block `}>
                            MovieStream
                        </h3>
                    </div>
                    <MdMenu className="text-white/90 md:block hidden cursor-pointer text-2xl" onClick={() => toggleMenu()} />
                </header>
                <div className={`${isMenuToggle && "items-center"} flex flex-col  gap-8`}>
                    <h5 className=" xl:block text-sm    text-gray-light font-bold uppercase">
                        Menu
                    </h5>
                    <div className="flex flex-col gap-6  hover:text-white  text-sm ">
                        {
                            NavBarItems.map((item, index) => (
                                <MenuItem
                                    name={item.name}
                                    path={item.path}
                                    icon={item.icon}
                                    key={index}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <GoogleSignIn  isMenuCLick={isMenuToggle}/>
        </div>
    )
}

export default SideBar