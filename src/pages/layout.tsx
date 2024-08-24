import MobileSideBar from "@/components/layout/Sidebar/MobileSideBar";
import SideBar from "@/components/layout/Sidebar/SideBar";
import { getTrendingMovies } from "@/lib/api/movieAPI/movieAPI";
import { ITrendingMovies } from "@/types/movie/movieTypes";
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [data, setData] = useState<ITrendingMovies>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTrendingMovies();

      setData(response.data);


      console.log(response);
    }
    fetchData();
  }, [])

  return (
    <div className="bg-black">
      <div className="md:block hidden">

        <SideBar />
      </div>
      <div className="md:hidden block">
        <MobileSideBar />
      </div>
      <Outlet />
    </div>
  )
}

export default Layout