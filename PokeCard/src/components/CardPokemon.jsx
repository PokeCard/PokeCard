import Card from "react-bootstrap/Card";
function CardPokemon() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Pikachu</Card.Title>
          <Card.Text>
            Memiliki kekuatan untuk mengeluarkan petir kepada lawannya.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Pikachu</Card.Title>
          <Card.Text>
            Memiliki kekuatan untuk mengeluarkan petir kepada lawannya.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardPokemon;
