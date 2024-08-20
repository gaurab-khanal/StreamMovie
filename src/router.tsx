import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"

import Hello from "./pages/Hello"
import Home from "./pages/Home"

const router = createBrowserRouter(
    createRoutesFromElements(
        
        <Route path="/" element={<Hello />}>
            <Route path="/home" element={<Home />} />
        </Route>
    )
  )

  export default router