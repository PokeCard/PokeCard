import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
// import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../src/pages/Layout.jsx";
import Catch from "./pages/Catch.jsx";
import Detail from "./pages/Detail.jsx";
import Home from "./pages/home.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,

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
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
