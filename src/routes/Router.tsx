import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../component/MainLayout/MainLayout";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import AllProducts from "../pages/AllProducts/AllProducts";
import DetailsPage from "../component/DetailsPage/DetailsPage";
import Payment from "../pages/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/all-products",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/all-products/details/:id",
        element: <DetailsPage></DetailsPage>,
      },
      {
        path: "/payment",
        element: <Payment></Payment>,
      },
    ],
  },
]);

export default router;
