import { useNavigate } from "react-router-dom"
import { MdMenu } from "react-icons/md";
import { useState } from "react";

const SideBar = () => {
    const navigate = useNavigate();
    const [isMenuClick, setIsMenuClick] = useState(false)

    return (
        <div className={`h-screen border-black md:border-r-gray-dark/50 p-5 md:border-r-[0.5px] bg-black  sm:w-[70px] transition-all ${!isMenuClick && 'md:w-[230px]'} ${isMenuClick && 'md:w-[70px]'}`}>
            <header className="flex gap-3 items-center justify-start">
                <div
                    className={`${isMenuClick ? 'hidden' : 'md:flex'}  hidden  gap-3 items-center justify-center`}
                    onClick={() => navigate("/")}
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
        </div>
    )
}

export default SideBar