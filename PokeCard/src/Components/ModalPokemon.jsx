import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalPokemon(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered

    >
      <div style={{ backgroundColor: "#0E181F" }} className='text-white p-2'>
        <Modal.Body>
          <Card >
            <Card.Img variant="top image-fluid" style={{ backgroundColor: props.item.color }} src={props.item.imageUrl} />
          </Card>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <h4 className='mb-0'>{props.item.name}</h4>
            <h5 className='mb-0'>#00{props.item.id}</h5>
          </div>
          <small > <strong> Types: </strong><em>{props.item.types.join(', ')}</em></small>
          <p className="mt-2 mb-0">
            {props.item.description}
          </p>
        </Modal.Body>
        <Modal.Footer className='d-flex flex-column justify-content-center'>
          <Button className='btn w-100' style={{ backgroundColor: "#67A15B" }}>Catch</Button>
          <Button className='btn w-100' style={{ backgroundColor: "#234B83" }}>See More Detail</Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}


export default ModalPokemon;