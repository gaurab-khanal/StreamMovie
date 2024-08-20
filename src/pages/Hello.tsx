import { getTrendingMovies } from "@/lib/api/movieAPI/movieAPI";
import { ITrendingMovies } from "@/types/movie/movieTypes";
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom";

const Hello = () => {
  const [data, setData] = useState<ITrendingMovies>();
 
  useEffect(()=>{
    const fetchData = async () => {
      const response = await getTrendingMovies();
     
        setData(response.data);
      

      console.log(response);
    }
    fetchData();
  }, [])

  return (
    <div>
    hello
    <Outlet/>
    {
      data?.results[0].title
    }
    </div>
  )
}

export default Hello