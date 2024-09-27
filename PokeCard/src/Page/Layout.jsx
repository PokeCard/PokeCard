import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

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
