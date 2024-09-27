import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";


const FormTeam = ({ dataTeam, readData, teamName, setTeamName, pokemonName, setPokemonName, isEdit }) => {

  const postData = async (e) => {
    e.preventDefault();

    try {
      // validate form
      if (teamName === "" || pokemonName === "") {
        throw ReferenceError("you must fill all input")
      }

      if (isEdit) {
        await axios.patch(`https://kindly-complete-end.glitch.me/team/${dataTeam.id}`, {
          "team": teamName,
          "pokemon": pokemonName
        })
      }

      if (dataTeam.length === 0) {
        await axios.post('https://kindly-complete-end.glitch.me/team',
          {
            "id": "1",
            "team": teamName,
            "pokemon": pokemonName,
          })
      } else {
        // post data use axios
        let idData = parseInt(dataTeam[dataTeam.length - 1].id) + 1

        await axios.post('https://kindly-complete-end.glitch.me/team', {
          "id": idData.toString(),
          "team": teamName,
          "pokemon": pokemonName,
        }
        )
      }
      readData();
      Swal.fire({
        title: "Good job!",
        text: "Your team has been added.",
        icon: "success",
        timer: 1000
      });
      setTeamName("");
      setPokemonName("");
    }
    catch (e) {
      console.log(e)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${e}`
      });
    }
  }

  return (
    <div
      className="text-white pt-4 d-flex flex-column align-items-center"
    >
      <h1 className="">Create Your Team</h1>
      <Form onSubmit={postData}>
        <div className="container">
          <div className="row justify-content-between">
            <Form.Group className="" controlId="formBasicText">
              <Form.Label>Team Name</Form.Label>
              <Form.Control type="text" placeholder="Create Team" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
            </Form.Group>
            <Form.Group className="my-4" controlId="formBasicText">
              <Form.Label>Pokemon</Form.Label>
              <Form.Control type="text" placeholder="Choose Pokemon.." value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} />
            </Form.Group>
          </div>
          <Button variant="primary" type="submit">
            {isEdit ? 'Edit Data' : 'Add Data'}
          </Button>
        </div>
      </Form>
    </div>
  );
};


export default FormTeam
