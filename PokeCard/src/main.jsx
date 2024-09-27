import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../src/Page/Layout.jsx";
import Catch from "./Page/Catch.jsx";
import Detail from "./Page/Detail.jsx";
import Home from "./Page/Home.jsx";
import AboutUs from "./Page/AboutUs.jsx";
import Team from "./Page/Team.jsx";
import ErrorPage from "./Page/ErrorPage.jsx";
import Loading from "./Page/LoadingPoke.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/catch",
        element: <Catch />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/loading",
        element: <Loading />,
      },
    ],
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
