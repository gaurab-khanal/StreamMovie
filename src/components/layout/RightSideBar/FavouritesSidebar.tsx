import { getTopRatedMovies, getTopRatedTvShows } from "@/lib/api/movieAPI/movieAPI";
import { useCallback, useEffect, useState } from "react"
import Card from "./Card";
import RightSidebarLoading from "@/components/skeletons/RightSideBarSkeleton";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TopRatedSideBar = () => {
    const [loading, setLoading] = useState(false);
    const [favShow, setFavShow] = useState<any[]>([]);
    const navigate = useNavigate();

    const [category, setCategory] = useState('movie'); // just for proto. will be replaced by state management
    const getFavShow = useCallback(async () => {
        setLoading(true);
        setCategory('movie')
        try {
            if (category === 'movie') {

                const res = await getTopRatedMovies(1);
                const threeMovies: any[] = [];
                for (let i = 0; i < 3; i++) {
                    threeMovies.push(res.data.results[i]);
                }
                setFavShow([...threeMovies])
            } else {
                const res = await getTopRatedTvShows(1);
                const threeMovies: any[] = [];
                for (let i = 0; i < 3; i++) {
                    threeMovies.push(res.data.results[i]);
                }
                setFavShow([...threeMovies])
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }

    }, [category])

    useEffect(() => {
        getFavShow();
    }, []);

    const handleTopRatedNavigation = () => {
        navigate(
            category === "movie" ? "home/top-rated/" : "home/top-rated/"
        );
    };

    return (
        <div className="flex flex-col gap-3">
            <h2 className=" text-white">Top Rated Shows</h2>
            {loading ?
                <RightSidebarLoading />
                :
                favShow.length === 0 ?
                    <h3 className="text-gray-dark mb-4">No {category === 'movie' ? 'movies' : 'tv shows'} added</h3>
                    :
                    favShow.map((items) => (
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
            {
                !loading && favShow.length !== 0 &&
                <Button
                    onClick={handleTopRatedNavigation}
                    className="px-4 py-2 text-lg/2 bg-red hover:bg-red/80 rounded-lg w-full text-white"
                >
                    See more
                </Button>
            }
        </div>
    )
}

export default TopRatedSideBar