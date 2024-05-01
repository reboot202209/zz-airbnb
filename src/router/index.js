import NotFound from "@/base_ui/not-found";
import Detail from "@/pages/detail";
import Entire from "@/pages/entire";
import Home from "@/pages/home";
import { createHashRouter, Navigate } from "react-router-dom";


const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to={"/home"} />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "detail/:id",
    element: <Detail />
  },
  {
    path: "/entire",
    element: <Entire />
  },
  {
    path: "*",
    element: <NotFound />
  }
])

export default router