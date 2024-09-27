import Card from "react-bootstrap/Card";

const CardAboutUs = () => {
  let Name = ['Julio Andarestu', 'Diana Novita', 'Ivan Dana Saputra']
  let Motto = ["All is Well", "Dont Give Up", "Everything is Going to be Allright"]
  let LinkGitHub = ["https://github.com/julioandarestu", "https://github.com/diananov11", "https://github.com/ivandanasaputra"]

  return (
    <>
      <Card style={{ width: "16rem" }} className="mt-4 mb-4">
        <Card.Img variant="top" src="../public/character.png" />
        <Card.Body>
          <Card.Title>{Name[i]}</Card.Title>
          <Card.Text>
            {Motto[i]}
          </Card.Text>
          <Card.Link href={LinkGitHub[i]}>Link</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardAboutUs;
