import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { FiHome, FiSearch } from "react-icons/fi";

const NavBarItems = [
  {
    name: "Home",
    icon: <FiHome />,
    path: "/home/movies",
  },
  {
    name: "Search",
    icon: <FiSearch />,
    path: "/search/",
  },
  {
    name: "Favorites",
    icon: <AiOutlineHeart />,
    path: "/favorites/",
  },
  {
    name: "Top Rated Shows",
    icon: <AiOutlineStar />,
    path: "/top-rated/",
  },
];
