import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../component/MainLayout/MainLayout";
import React from "react";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";

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
    ],
  },
]);

export default router;
