import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Aside from "../Component/Aside";

function Layout() {
  return (
    <>
      <Navbar />

      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
