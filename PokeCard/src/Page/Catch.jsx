import { Button } from "react-bootstrap";
import Aside from "../Component/Aside";
import CardPokemon from "../Component/CardPokemon";
import Footer from "../Component/Footer";
import MainMenu from "../Component/MainMenus";
import Navbar from "../Component/Navbar";
import SearchBar from "../Component/SearchBar";

function Catch() {
  return (
    <>
      <section
        className="d-flex container-fluid min-vh-100 pt-2"
        style={{ background: "#0E181F" }}
      >
        <aside className="col-3 text-light d-flex flex-column align-items-center mt-5">
          <Aside />
          <MainMenu />
        </aside>
        <div className="col-9 container mb-4 mt-2">
          <div className="d-flex justify-content-between align-items-center">
            <SearchBar label="My Pokemon" />
            <Button>See All Pokemon</Button>
          </div>
          <div className="d-flex justify-content-between flex-wrap gap-2"></div>
        </div>
      </section>
    </>
  );
}

export default Catch;
