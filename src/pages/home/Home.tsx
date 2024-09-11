import CentralShowContainer from "@/components/CentralShowContainer"
import { getTrendingMovies, getTrendingTvShows } from "@/lib/api/movieAPI/movieAPI";
import useType from "@/store/useType"
import { ITrendingMovies } from "@/types/movie/movieTypes";
import { ITrendingTv } from "@/types/tv/tvTypes";
import { useCallback, useEffect, useState } from "react";

const Home = () => {

  const { type } = useType();
  const [loading, setLoading] = useState(false);
  const [trendingTv, setTrendingTv] = useState<ITrendingTv>({ page: 0, results: [], total_pages: 0, total_results: 0 });
  const [trendingMovie, setTrendingMovie] = useState<ITrendingMovies>({ page: 0, results: [], total_pages: 0, total_results: 0 });

  const getTrendingShow = useCallback(async () => {
    setLoading(true);
    try {
      if (type === 'movies') {
        if (trendingMovie?.results?.length) return;

        const res = await getTrendingMovies();
        console.log(res.data)
        setTrendingMovie(res.data);
      } else {
        if (trendingTv?.results?.length) return;

        const res = await getTrendingTvShows();
        console.log(res.data)
        setTrendingTv(res.data);
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }

  }, [type])

  useEffect(() => {
    getTrendingShow();
  }, [getTrendingShow])

  return (
    <div className="text-white pr-[20px] md:pr-[30px]">
      <CentralShowContainer shows={type === 'movies' ? trendingMovie?.results[0] : trendingTv?.results[0]} />
    </div>
  )
}

export default Home