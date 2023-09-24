import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Components/Home/Home";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },

    ]
  },
]);

export default myRouter;
