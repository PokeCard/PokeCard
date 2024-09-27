import { Card } from "react-bootstrap";

import React from "react";
import ModalPokemon from "./ModalPokemon";
import LoadingSpin from "./LoadingSpin";

function CardPokemon({ pokemon, loadingSpin }) {
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
        {loadingSpin ? <LoadingSpin /> :
          <Card.Body className="d-flex justify-content-between gap-3 align-items-center">
            <div className="">
              <Card.Title className="fs-5">{pokemon.name}</Card.Title>
              <p style={{ height: "rem" }}>{pokemon.genus}</p>
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
        }
      </Card>
      <ModalPokemon
        show={modalShow}
        onHide={() => setModalShow(false)}
        item={pokemon}
      />
    </>
  );
}

export default CardPokemon;
