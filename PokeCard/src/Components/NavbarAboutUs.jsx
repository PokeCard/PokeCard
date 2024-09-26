import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
const NavbarAboutUs = () => {
  return (
    <>
      <nav
        style={{
          backgroundColor: "#152027",
        }}
        className="d-flex container-fluid justify-content-between align-items-center p-2 item-center"
      >
        <div className="d-flex gap-1 align-items-center text-white mx-5">
          <img
            src="../public/logo.png"
            alt="logo"
            style={{ height: "2rem", width: "2rem" }}
            className="mt-1"
          />
          <h6 className="mt-2">PokeCard</h6>
        </div>
        <div className="d-flex gap-4 align-items-center mx-5">
          <div className="text-white d-flex gap-3">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#favorite">Favoruite</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </div>
          <div className="d-flex align-items-center">
            <Image
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
              roundedCircle
              style={{ width: "1.8rem", height: "1.8rem" }}
            />
            <h6 className="text-white mt-2">Bang Maju</h6>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarAboutUs;
