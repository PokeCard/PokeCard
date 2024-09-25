import { Card } from "react-bootstrap";
function CardPokemon() {
  return (
    <>
      <Card style={{ width: "16.9rem" }}>
        <Card.Body className="d-flex justify-content-between">
          <div className="">
            <Card.Title className="fs-5">Pikachu</Card.Title>
            <p>#001</p>
            <Card.Text className="fs-6" style={{ width: "6rem" }}>
              Grass, Poison
            </Card.Text>
          </div>
          <Card.Img
            variant=""
            src="../public/pikachu.png"
            style={{ width: "6rem", height: "6rem" }}
          />
        </Card.Body>
      </Card>
    </>
  );
}

export default CardPokemon;
