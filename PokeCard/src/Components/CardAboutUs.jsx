import Card from "react-bootstrap/Card";

const CardAboutUs = () => {
  return (
    <>
      <Card style={{ width: "16rem" }} className="mt-4 mb-4">
        <Card.Img variant="top" src="../public/character.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Link Github</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardAboutUs;
