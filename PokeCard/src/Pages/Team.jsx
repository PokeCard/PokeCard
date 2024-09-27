import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import FormTeam from "../components/FormTeam";
import TableList from "../components/TableList";
import Swal from "sweetalert2";
import axios from "axios";

const Team = () => {
  const [dataTeam, setDataTeam] = useState([])
  const [teamName, setTeamName] = useState("")
  const [pokemonName, setPokemonName] = useState("")
  const [isEdit, setIsEdit] = useState(false)

  const readData = async () => {
    try {

      const { data } = await axios.get('https://kindly-complete-end.glitch.me/team')
      setDataTeam(data)
      console.log(data)
    }
    catch (e) {
      console.log(e)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${e}`
      });
    }
    readData
  }
  useEffect(() => { readData() }, [])


  return (
    <div className="min-vh-100" style={{ background: "#0E181F" }}>
      <FormTeam dataTeam={dataTeam} readData={readData} teamName={teamName} setTeamName={setTeamName} pokemonName={pokemonName} setPokemonName={setPokemonName} isEdit={isEdit} />
      <TableList dataTeam={dataTeam} readData={readData} teamName={teamName} setTeamName={setTeamName} pokemonName={pokemonName} setPokemonName={setPokemonName} isEdit={isEdit} setIsEdit={setIsEdit} />
    </div>
  )
};

export default Team;
