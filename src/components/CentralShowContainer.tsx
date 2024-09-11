import { getSingleMovie, getSingleTv } from "@/lib/api/movieAPI/movieAPI";
import { imageUrl } from "@/lib/image/image";
import useType from "@/store/useType";
import { ISingleTrendingMovie } from "@/types/movie/movieTypes"
import { ISingleTrendingTv } from "@/types/tv/tvTypes"
import { useCallback, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { DialogDemo } from "./DIalog";

interface IGenres {
    id: number;
    name: string;
}

interface ICentralShowContainerProps {
    shows: ISingleTrendingMovie | ISingleTrendingTv;
}

const CentralShowContainer = ({ shows }: ICentralShowContainerProps) => {
    const { type } = useType();
    const imagePath = imageUrl(shows?.backdrop_path);
    const [genresMovie, setGenresMovie] = useState<IGenres[]>([]);
    const [genresTv, setGenresTv] = useState<IGenres[]>([]);
    const [loading, setLoading] = useState(false);
    
    const getDetails = useCallback(async () => {
        setLoading(true);
        try {
          if (type === 'movies') {
            if(genresMovie.length>0) return;
            const res = await getSingleMovie(shows?.id);
            console.log(res.data)
            setGenresMovie(res.data.genres);
          } else {
            if (genresTv.length>0) return;
    
            const res = await getSingleTv(shows?.id);
            console.log(res.data)
            setGenresTv(res.data.genres);
          }
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false);
        }
    
      }, [type, shows?.id])

      useEffect(()=>{
        getDetails();
      }, [getDetails])

    const genres = type === 'movies' ? genresMovie : genresTv;

    return (
        <div className="aspect-video sm:aspect-[2/1] relative bg-cover rounded-xl cursor-pointer">
            <div className="absolute w-full h-full bg-gradient-to-tr from-black/30 rounded-xl"></div>
            <LazyLoadImage
                src={imagePath}
                alt="slider_img"
                className="w-full h-full rounded-xl object-cover"
                loading="lazy"
            />
            <div>
                <div className="absolute bottom-4 left-4 sm:left-10 ">
                    <h1 className="uppercase text-md sm:text-xl font-medium">{(shows as ISingleTrendingMovie)?.title || (shows as ISingleTrendingTv)?.name}</h1>
                    <p className="uppercase text-gray-300 text-xs sm:text-sm my-1">
                        {genres?.map((genre: any) => genre.name).join(", ")}
                    </p>
                </ div>
            </div>
        </div>
    )
}

export default CentralShowContainer