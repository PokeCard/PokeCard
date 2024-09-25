import { Card } from "react-bootstrap";
function CardPokemon({ pokemon }) {
  return (
    <>
      <Card
        style={{
          width: "22.7rem",
          backgroundColor: pokemon.color,
        }}
      >
        <Card.Body className="d-flex justify-content-between gap-3 align-items-center">
          <div className="">
            <Card.Title className="fs-5">{pokemon.name}</Card.Title>
            <p>{pokemon.genus}</p>
            <Card.Text className="fs-6" style={{ width: "6rem" }}>
              {pokemon.types.index > 0
                ? `${pokemon.types[0]}, ${pokemon.types[1]}`
                : `${pokemon.types}`}
            </Card.Text>
          </div>
          <Card.Img
            variant=""
            src={pokemon.imageUrl}
            style={{ width: "7em", height: "6.5rem" }}
          />
        </Card.Body>
      </Card>
    </>
  );
}

export default CardPokemon;
