import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"

import Hello from "./pages/Hello"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/hello" element={<Hello />} />
    )
  )

  export default router