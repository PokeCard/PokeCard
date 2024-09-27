import { Button } from "react-bootstrap";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div
        className="min-vh-100 d-flex flex-column justify-content-center align-items-center"
        style={{ background: "#0E181F" }}
      >
        <img
          src="../public/errorPage.png"
          alt="loading"
          style={{ width: "11rem", height: "12rem" }}
        />
        <h5 className="text-white">404 Page Not Found</h5>
        <Button
          className="mt-3"
          onClick={() => {
            navigate(`/`);
          }}
        >
          Back To Home
        </Button>
      </div>
      <Footer />
    </>
  );
}

export default ErrorPage;
