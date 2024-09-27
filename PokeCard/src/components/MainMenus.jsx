import { FaSpaghettiMonsterFlying } from "react-icons/fa6";
import { MdCatchingPokemon } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import Table from "react-bootstrap/Table";
import { LuSwords } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function MainMenu({ level }) {
  const navigate = useNavigate();
  return (
    <>
      <section className="mt-5" style={{ width: "21rem" }}>
        <h5 className="d-flex justify-content-center">Main Menu</h5>
        <Table bordered hover variant="dark" className="mt-3">
          <tbody>
            <tr
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(`/`);
              }}
            >
              <div className="d-flex align-items-center border border-grey gap-2">
                <MdCatchingPokemon />
                <td>All Pokemon</td>
              </div>
            </tr>
            <tr
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(`/catch`);
              }}
            >
              <div className="d-flex align-items-center border border-grey gap-2">
                <FaSpaghettiMonsterFlying />
                <td>My Pokemon</td>
              </div>
            </tr>
            <tr
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(`/team`);
              }}
            >
              <div className="d-flex align-items-center border border-grey gap-2">
                <LuSwords />
                <td>Create Team</td>
              </div>
            </tr>
            <tr
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(`/aboutUs`);
              }}
            >
              <div className="d-flex align-items-center border border-grey gap-2">
                <RiTeamFill />
                <td>About Us</td>
              </div>
            </tr>
          </tbody>
        </Table>
      </section>
    </>
  );
}

export default MainMenu;
