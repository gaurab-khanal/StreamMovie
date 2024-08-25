import { MdMenu } from "react-icons/md";
import { useState } from "react";
import GoogleSignIn from "@/components/GoogleSignIn";
import { NavBarItems } from "@/constants/NavBarItems";
import MenuItem from "./MenuItem";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
    const [isMenuClick, setIsMenuClick] = useState(false);
    const navigate = useNavigate();

    return (
        <div className={`h-screen flex flex-col justify-between border-black md:border-r-gray-dark/50 p-5 md:border-r-[0.5px] bg-black  sm:w-[70px] transition-all ${!isMenuClick && 'md:w-[230px]'} ${isMenuClick && 'md:w-[70px]'}`}>
            <div className="flex flex-col items-start gap-10">
                <header className="flex gap-3 items-center  justify-start">
                    <div
                        className={`${isMenuClick ? 'hidden' : 'md:flex'}  hidden  gap-3 items-center justify-center`}
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
                    <MdMenu className="text-white/90 md:block hidden cursor-pointer text-2xl" onClick={() => setIsMenuClick((prv) => !prv)} />
                </header>
                <div className={`${isMenuClick && "items-center"} flex flex-col  gap-8`}>
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
                                    isMenuCLick={isMenuClick}
                                    key={index}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <GoogleSignIn isMenuCLick={isMenuClick} />
        </div>
    )
}

export default SideBar