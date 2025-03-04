import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <nav
        style={{
          backgroundColor: "#152027",
        }}
        className="d-flex container-fluid justify-content-between align-items-center p-2 item-center"
      >
        <div
          className="d-flex gap-1 align-items-center text-white mx-2 mx-md-5"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate(`/`);
          }}
        >
          <img
            src="../public/logo.png"
            alt="logo"
            style={{ height: "2rem", width: "2rem" }}
            className="mt-1"
          />
          <h6 className="mt-2">PokeCard</h6>
        </div>
        <div
          className="d-flex gap-1 align-items-center mx-2 mx-md-5"
          style={{ cursor: "pointer" }}
        >
          <Image
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            roundedCircle
            style={{ width: "1.8rem", height: "1.8rem" }}
          />
          <h6 className="text-white mt-2">Bang Maju</h6>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
