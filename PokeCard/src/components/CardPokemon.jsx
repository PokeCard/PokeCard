import { Card } from "react-bootstrap";

import React from "react";
import ModalPokemon from "./ModalPokemon";
import LoadingSpin from "./LoadingSpin";

function CardPokemon({
  pokemon,
  loadingSpin,
  fetchPokemon,
  setLevel,
  setTitlePlayer,
}) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Card
        style={{
          width: "16.7rem",
          backgroundColor: pokemon.color,
        }}
        onClick={() => setModalShow(true)}
      >
        {loadingSpin ? (
          <LoadingSpin />
        ) : (
          <Card.Body
            className="d-md-flex justify-content-between text-center text-md-start align-items-center"
            style={{ cursor: "pointer" }}
          >
            <div className="">
              <Card.Title className="fs-5">{pokemon.name}</Card.Title>
              <p style={{ fontWeight: "400", fontSize: "0.8rem" }}>
                #{pokemon.id.toString().padStart(3, "0")}
              </p>
              <Card.Text
                className="text-center text-md-start mx-4 mx-md-0 mb-3 md-mb-0"
                style={{ width: "9rem" }}
              >
                {pokemon.genus}
              </Card.Text>
            </div>
            <Card.Img
              variant=""
              src={pokemon.imageUrl}
              style={{ width: "7em", height: "6.5rem" }}
            />
          </Card.Body>
        )}
      </Card>
      <ModalPokemon
        show={modalShow}
        onHide={() => setModalShow(false)}
        item={pokemon}
        fetchPokemon={fetchPokemon}
      />
    </>
  );
}

export default CardPokemon;
