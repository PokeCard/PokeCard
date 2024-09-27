import axios from "axios";
import React from "react";


const TableData = ({ item, readData, teamName, setTeamName, pokemonName, setPokemonName, isEdit, setIsEdit }) => {

  // handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://kindly-complete-end.glitch.me/team/${id}`);
    }
    catch (e) {
      console.log(e)
    }
    readData()
  }


  // const handleEditId = async (id) => {
  //   try {
  //     await axios.patch(`https://kindly-complete-end.glitch.me/team/${id}`, {
  //       "team": teamName,
  //       "pokemon": pokemonName
  //     })
  //   }
  //   catch (e) {
  //     console.log(e)
  //   }
  //   readData()
  // }

  const handleEdit = (params) => {
    setTeamName(params.team);
    setPokemonName(params.pokemon)
    setIsEdit(true)

  }


  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.team}</td>
      <td>{item.pokemon}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={() => handleEdit(item)} >
          Edit
        </button>
        <button type="button" className="btn btn-danger" onClick={() => handleDelete(item.id)}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default TableData
