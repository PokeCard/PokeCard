import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Team = () => {
  //   const [tasks, seTasks] = useState([]);
  //   const [newTask, setNewTask] = useState("");

  //   const handleInputChange = (event) => {};

  //   const addList = () => {};

  //   const deleteList = (index) => {};

  //   const editList = (index) => {};

  <ol>
    <li>
      <button className="delete-button"></button>
    </li>
  </ol>;

  return (
    <div
      className="min-vh-100 text-white pt-4 d-flex flex-column align-items-center"
      style={{ background: "#0E181F" }}
    >
      <h1 className="">Create Your Team</h1>
      <Form>
        <div className="container">
          <div className="row justify-content-between">
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Label>Team Name</Form.Label>
              <Form.Control type="email" placeholder="Create Team" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Pokemon</Form.Label>
              <Form.Control type="password" placeholder="Select.." />
            </Form.Group>
          </div>
          <Button variant="primary" type="submit">
            Add Data
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Team;
