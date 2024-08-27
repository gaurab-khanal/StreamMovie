import useMenuToggleStore from "@/store/useMenuToggleStore";
import { Link, useLocation } from "react-router-dom";

interface IMenuProps {
    name: string;
    icon: JSX.Element;
    path: string;
}

const MenuItem = ({ name, icon, path }: IMenuProps) => {
    const { pathname } = useLocation();
    const {isMenuToggle:isMenuCLick}= useMenuToggleStore();

    return (
        <Link to={path} className="flex gap-4  hover:text-white items-center cursor-pointer text-gray-light">
            <span className={`text-lg ${pathname.split('/')[1]?.startsWith(path.split('/')[1]) && 'text-red'}`}>
                {icon}
            </span>
            <div className={`${isMenuCLick && "hidden"} ${pathname.split('/')[1]?.startsWith(path.split('/')[1]) && 'text-white'}`}>{name}</div>
        </Link>
    )
}

export default MenuItem