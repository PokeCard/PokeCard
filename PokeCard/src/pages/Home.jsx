import Aside from "../components/Aside";
import CardPokemon from "../components/CardPokemon";
import "../App.css";
import { Button } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import MainMenu from "../components/MainMenus";

function Home() {
  return (
    <>
      <section
        className="d-flex container-fluid min-vh-100 pt-5"
        style={{ background: "#0E181F" }}
      >
        <aside className="col-3 text-light d-flex flex-column align-items-center">
          <Aside />
          <MainMenu />
        </aside>
        <div className="col-9 container">
          <div className="d-flex justify-content-between align-items-center">
            <SearchBar />
            <h6 className="text-white">Page 1</h6>
          </div>
          <div className="d-flex justify-content-between flex-wrap gap-2">
            <CardPokemon />
            <CardPokemon />
            <CardPokemon />
            <CardPokemon />
            <CardPokemon />
            <CardPokemon />
            <CardPokemon />
            <CardPokemon />
            <CardPokemon />
            <CardPokemon />
            <CardPokemon />
            <CardPokemon />
            <CardPokemon />
            <CardPokemon />
            <CardPokemon />
            <CardPokemon />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
