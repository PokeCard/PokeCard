import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavbarAboutUs from "../Components/NavbarAboutUs";
import CardAboutUs from "../Components/CardAboutUs";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <>
      <NavbarAboutUs />
      <body style={{ background: "#0E181F" }} className="min-vh-100 pt-5">
        <h1 className="text-center text-light">Our Team</h1>
        <p className="text-center text-light">
          Consist of talentful person, coming from all corner of the islands.
          Here they are!
        </p>
        <section className="container text-center ">
          <div className="row justify-content-around ">
            {["Julio", "Diana", "Ivan"].map((item) => {
              return <CardAboutUs />;
            })}
          </div>
        </section>
      </body>
      <Footer />
    </>
  );
}

export default AboutUs;
