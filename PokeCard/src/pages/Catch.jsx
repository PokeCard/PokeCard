import { Button } from "react-bootstrap";
import Aside from "../components/Aside";
import CardPokemon from "../components/CardPokemon";
import Footer from "../components/Footer";
import MainMenu from "../components/MainMenus";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

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
