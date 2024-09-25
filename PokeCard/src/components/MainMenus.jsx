import Table from "react-bootstrap/Table";
function MainMenu() {
  return (
    <>
      <section className="mt-5" style={{ width: "21rem" }}>
        <h5 className="d-flex justify-content-center">Main Menu</h5>
        <Table bordered hover variant="dark" className="mt-3">
          <tbody>
            <tr>
              <td>All Pokemons</td>
            </tr>
            <tr>
              <td>Catch Pokemon</td>
            </tr>
            <tr>
              <td>About Us</td>
            </tr>
          </tbody>
        </Table>
      </section>
    </>
  );
}

export default MainMenu;
