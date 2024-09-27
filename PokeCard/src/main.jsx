import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
// import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../src/pages/Layout.jsx";
import Catch from "./pages/Catch.jsx";
import Detail from "./pages/Detail.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Team from "./Pages/Team.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import Loading from "./pages/LoadingPoke.jsx";

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
