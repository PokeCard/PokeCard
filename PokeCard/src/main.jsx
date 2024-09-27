import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
// import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
<<<<<<< HEAD
import Layout from "../src/Page/Layout.jsx";
import Catch from "./Page/Catch.jsx";
import Detail from "./Page/Detail.jsx";
import Home from "./Page/home.jsx";
import AboutUs from "./Page/AboutUs.jsx";
import Team from "./Page/Team.jsx";
=======
import Layout from "../src/pages/Layout.jsx";
import Catch from "./pages/Catch.jsx";
import Detail from "./pages/Detail.jsx";

import AboutUs from "./Pages/AboutUs.jsx";
import Team from "./Pages/Team.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import Loading from "./pages/LoadingPoke.jsx";
import Home from "./pages/home.jsx";
>>>>>>> 0dad943a90e4b655f0085015d824c35b06398047

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
