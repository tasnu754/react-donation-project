import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Components/Home/Home";
import Donation from "../Components/Donation/Donation";
import ErrorPage from "../Components/ErroePage/ErrorPage";
import DonationAdd from "../Components/DonationAdd/DonationAdd";
import Statistic from "../Components/Statistic/Statistic";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/category.json"),
      },
      {
        path: "/cardsDetails/:id",
        element: <Donation></Donation>,
        loader: () => fetch("/category.json"),
      },
      {
        path: "/donation",
        element: <DonationAdd></DonationAdd>,
      },
      {
          path: "/statistics",
          element: <Statistic></Statistic>
      },
    ],
  },
]);

export default myRouter;
