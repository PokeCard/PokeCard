import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Aside from "../components/Aside";

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
