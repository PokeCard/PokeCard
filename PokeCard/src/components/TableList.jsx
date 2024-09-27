import TableData from "./TableData"

const TableList = ({ dataTeam, readData, teamName, setTeamName, pokemonName, setPokemonName, isEdit, setIsEdit }) => {
  // console.log(dataTeam)
  return (
    <>
      <table className="table table-dark container mt-5">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Team</th>
            <th scope="col">Pokemon</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {dataTeam.map((item, index) => <TableData key={index} item={item} readData={readData} teamName={teamName} setTeamName={setTeamName} pokemonName={pokemonName} setPokemonName={setPokemonName} isEdit={isEdit} setIsEdit={setIsEdit} />)}
        </tbody>
      </table>
    </>
  )
}

export default TableList
