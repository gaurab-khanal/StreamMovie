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
            <Route path="/home" element={<Navigate to="/home/movies" />} />
            <Route path="/home/:type" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorites/" element={<Favourites />} />
            <Route path="/top-rated/" element={<TopRatedShows />} />
        </Route>

    )
)

export default router