import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavbarAboutUs from "../Component/NavbarAboutUs";
import CardAboutUs from "../Component/CardAboutUs";
import Footer from "../Component/Footer";

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

        {/* ------------------------
        <h1 className="display-6">Creat Your Team</h1>
        <Form>
          <div className="container">
            <div className="row justify-content-between">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Create Team</Form.Label>
                <Form.Control type="email" placeholder="Create Team" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label>Pokemon</Form.Label>
                <Form.Control type="password" placeholder="Select.." />
              </Form.Group>
              <Form.Group className="mb-1" controlId="formButton">
                <Form.Text className="text-muted">
                  <Button variant="primary" type="submit">
                    Add Data
                  </Button>
                </Form.Text>
              </Form.Group>
            </div>
          </div>
        </Form> */}
      </body>
      <Footer />
    </>
  );
}

export default AboutUs;
