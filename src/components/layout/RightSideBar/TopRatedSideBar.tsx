import { getTopRatedMovies, getTopRatedTvShows } from "@/lib/api/movieAPI/movieAPI";
import { useCallback, useEffect, useState } from "react"
import Card from "./Card";
import RightSidebarLoading from "@/components/skeletons/RightSideBarSkeleton";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import useType from "@/store/useType";

const TopRatedSideBar = () => {
    const [loading, setLoading] = useState(false);
    const [topRatedShow, setTopRatedShow] = useState<any[]>([]);
    const navigate = useNavigate();
    const type= useType((state)=>state.type);

    const getTopRatedShow = useCallback(async () => {
        setLoading(true);
        try {
            if (type === 'movies') {

                const res = await getTopRatedMovies(1);
                const threeMovies: any[] = [];
                for (let i = 0; i < 3; i++) {
                    threeMovies.push(res.data.results[i]);
                }
                setTopRatedShow([...threeMovies])
            } else {
                const res = await getTopRatedTvShows(1);
                const threeMovies: any[] = [];
                for (let i = 0; i < 3; i++) {
                    threeMovies.push(res.data.results[i]);
                }
                setTopRatedShow([...threeMovies])
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }

    }, [type])

    useEffect(() => {
        getTopRatedShow();
    }, [getTopRatedShow]);

    const handleTopRatedNavigation = () => {
        navigate(
            type === "movies" ? "/top-rated/movies" : "/top-rated/tv"
        );
    };

    return (
        <div className="flex flex-col gap-3">
            <h2 className=" text-white">Top Rated {type === 'movies' ? 'Movies' : 'TV Shows'}</h2>
            {loading ?
                <RightSidebarLoading />
                :

                topRatedShow.map((items) => (
                    <Card
                        key={items.id}
                        id={items.id}
                        title={items.title || items.name}
                        poster_path={items.poster_path}
                        rating={items.vote_average}
                        release_date={items.release_date || items.first_air_date}
                    />
                ))
            }
            <Button
                onClick={handleTopRatedNavigation}
                className="px-4 py-2 text-lg/2 bg-red hover:bg-red/80 rounded-lg w-full text-white"
            >
                See more
            </Button>
        </div>
    )
}

export default TopRatedSideBar