import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalPokemon from './ModalPokemon';
import React from 'react';
import { ProgressBar } from 'react-bootstrap';

function Card1({ item }) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="col-sm-2" onClick={() => setModalShow(true)}>
        <Card style={{ width: '10rem' }}>
          <Card.Img variant="top" style={{ backgroundColor: item.color }} src={item.imageUrl} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
          </Card.Body>
        </Card>

      </div>
      <ModalPokemon
        show={modalShow}
        onHide={() => setModalShow(false)} item={item} />


    </>
  );
}

export default Card1;