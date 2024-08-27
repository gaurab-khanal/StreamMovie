import useType from "@/store/useType";
import { useNavigate, useParams } from "react-router-dom"

const Header = () => {
    const { type } = useParams<{ type: string }>();
    const navigate = useNavigate();
    const setType= useType((state)=>state.setType);

    const handleTvClick = () => {
        setType('tv')
        navigate("/home/tv");
    }

    const handleMoviesClick = () => {
        setType('movies')
        navigate("/home/movies")
    }

    return (
        <header className="">
            <ul className="flex gap-4 text-gray-light text-sm sm:text-base">
                <li
                    onClick={handleTvClick}
                    className={` ${type?.includes('tv') && 'text-white'}
          text-gray-light hover:text-white cursor-pointer
          pathname.includes("tv") && "text-white"
        `}
                >
                    TV Series
                </li>
                <li
                    onClick={handleMoviesClick}
                    className={`
            ${type?.includes("movies") && "text-white"}
          text-gray-light hover:text-white cursor-pointer
          
        `}
                >
                    Movies
                </li>
            </ul>
        </header>
    )
}

export default Header