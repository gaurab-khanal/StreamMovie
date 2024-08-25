import { Link, useLocation } from "react-router-dom";

interface IMenuProps {
    name: string;
    icon: JSX.Element;
    path: string;
    isMenuCLick: boolean;
}

const MenuItem = ({ name, icon, path, isMenuCLick }: IMenuProps) => {
    const { pathname } = useLocation();

    return (
        <Link to={path} className="flex gap-4  hover:text-white items-center cursor-pointer text-gray-light">
            <span className={`text-lg ${pathname.split('/')[2].startsWith(path.split('/')[2]) && 'text-red'}`}>
                {icon}
            </span>
            <div className={`${isMenuCLick && "hidden"} ${pathname.split('/')[2].startsWith(path.split('/')[2]) && 'text-white'}`}>{name}</div>
        </Link>
    )
}

export default MenuItem