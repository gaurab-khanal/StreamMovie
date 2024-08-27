import FavouritesSidebar from "./FavouritesSidebar"
import TopRatedSideBar from "./TopRatedSideBar"

const RightSideBar = () => {
  return (
    <div className="text-white  h-full lg:w-[270px] flex flex-col gap-7 border-black md:border-l-gray-dark/50 p-5 md:border-l-[0.5px] bg-black  transition-all">
      <TopRatedSideBar/>
      <FavouritesSidebar/>
    </div>
  )
}

export default RightSideBar