import NavbarAboutUs from "../Component/NavbarAboutUs";
import Footer from "../Component/Footer";
import Card from "react-bootstrap/Card";
function AboutUs() {
  let data = [
    {
      Gambar: "https://avatars.githubusercontent.com/u/89517552?s=96&v=4",
      Name: "Julio Andarestu",
      Motto:
        "Success is not the result of spontaneous combustion. You must set yourself on fire with determination and passion.",
      LinkGitHub: "https://github.com/julioandarestu",
    },
    {
      Gambar: "https://avatars.githubusercontent.com/u/175142981?v=4",
      Name: "Diana Novita",
      Motto:
        "Believe in yourself, even when the world doubts you. Your potential is greater than any obstacle.",
      LinkGitHub: "https://github.com/diananov11",
    },
    {
      Gambar: "https://avatars.githubusercontent.com/u/176256023?v=4",
      Name: "Ivan Dana Saputra",
      Motto:
        "Every step you take, no matter how small, brings you closer to your dreams. Keep moving forward.",
      LinkGitHub: "https://github.com/ivandanasaputra",
    },
  ];

  return (
    <>
      <div style={{ background: "#0E181F" }} className="min-vh-100">
        <NavbarAboutUs />
        <h1 className="text-center text-light mt-5">Our Team</h1>
        <p className="text-center text-light">
          Consist of talentful person, coming from all corner of the islands.
          Here they are!
        </p>
        <div class="row ">
          <div className="d-flex justify-content-center gap-5">
            {data.map((item) => (
              <Card style={{ width: "16rem" }} className="mt-4 mb-4">
                <Card.Img
                  className="object-fit-sm-cover border rounded"
                  variant="top"
                  src={item.Gambar}
                />
                <Card.Body>
                  <Card.Title>{item.Name}</Card.Title>
                  <Card.Text>{item.Motto}</Card.Text>
                  <Card.Link href={item.LinkGitHub}>My Github</Card.Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;

// let Gambar = [
//   "https://avatars.githubusercontent.com/u/89517552?s=96&v=4",
//   "https://avatars.githubusercontent.com/u/175142981?v=4",
//   "https://avatars.githubusercontent.com/u/176256023?v=4",
// ];
// let Name = ["Julio Andarestu", "Diana Novita", "Ivan Dana Saputra"];
// let Motto = [
//   "All is Well",
//   "Nothing to Lose",
//   "Everything is Going to be Allright",
// ];
// let LinkGitHub = [
//   "https://github.com/julioandarestu",
//   "https://github.com/diananov11",
//   "https://github.com/ivandanasaputra",
// ];
