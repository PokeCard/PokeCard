import axios from "axios";
import { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function ModalDelete(props) {
  const navigate = useNavigate();

  const handleAddFav = async () => {
    try {
      await axios.post(
        "https://boggy-well-tourmaline.glitch.me/fav",
        props.item
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Your catched a ${props.item.name}`,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `You've Already Caught a ${props.item.name}`,
        text: "Can Only Catch 1 Pokemon of Each Type!",
      });
    }
  };

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div style={{ backgroundColor: "#0E181F" }} className="text-white p-2">
        <Modal.Body>
          <Card>
            <Card.Img
              variant="top image-fluid"
              style={{ backgroundColor: props.item.color }}
              src={props.item.imageUrl}
            />
          </Card>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <h4 className="mb-0">{props.item.name}</h4>
            <h5 className="mb-0">
              #{props.item.id.toString().padStart(3, "0")}
            </h5>
          </div>
          <small>
            {" "}
            <strong> Types: </strong>
            <em>{props.item.types.join(", ")}</em>
          </small>
          <p className="mt-2 mb-0">{props.item.description}</p>
        </Modal.Body>
        <Modal.Footer className="d-flex flex-column justify-content-center">
          <Button
            className="btn w-100"
            style={{ backgroundColor: "#67A15B" }}
            onClick={handleAddFav}
          >
            Catch
          </Button>
          <Button
            className="btn w-100"
            style={{ backgroundColor: "#234B83" }}
            onClick={() => {
              navigate(`/detail/${props.item.id}`);
            }}
          >
            See More Detail
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

export default ModalDelete;
