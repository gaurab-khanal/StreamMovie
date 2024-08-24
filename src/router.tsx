import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Layout from "./pages/layout"

const router = createBrowserRouter(
    createRoutesFromElements(
        
        <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
        </Route>
    )
  )

  export default router