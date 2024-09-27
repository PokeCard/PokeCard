import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
const TableData = ({
  item,
  readData,
  teamName,
  setTeamName,
  pokemonName,
  setPokemonName,
  isEdit,
  setIsEdit,
  setIdEdit,
}) => {
  // handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://kindly-complete-end.glitch.me/team/${id}`);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your task has been deleted",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (e) {
      console.log(e);
    }
    readData();
  };

  const handleEdit = (params) => {
    setTeamName(params.team);
    setPokemonName(params.pokemon);
    setIsEdit(true);
    setIdEdit(params.id);
  };

  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.team}</td>
      <td>{item.pokemon}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleEdit(item)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleDelete(item.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableData;
