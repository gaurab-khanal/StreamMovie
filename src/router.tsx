import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Layout from "./pages/layout"
import Search from "./pages/search/Search"
import TopRatedShows from "./pages/topRatedShow/TopRatedShows"
import Favourites from "./pages/favourites/Favourites"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Navigate to="/home/movies" />} />
            <Route path="/home/movies" element={<Home />} />
            <Route path="/home/search" element={<Search />} />
            <Route path="/home/favorites/" element={<Favourites />} />
            <Route path="/home/top-rated/" element={<TopRatedShows />} />
        </Route>

    )
)

export default router