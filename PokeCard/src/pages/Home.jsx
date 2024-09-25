import Aside from "../components/Aside";
import CardPokemon from "../components/CardPokemon";
import "../App.css";
import SearchBar from "../components/SearchBar";
import MainMenu from "../components/MainMenus";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Home() {
  const [pokemon, setPokemon] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.deno.dev/pokemon?offset=1&limit=12"
      );
      console.log(response.data);

      setPokemon(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <section
        className="d-flex container-fluid min-vh-100 pt-5"
        style={{ background: "#0E181F" }}
      >
        <aside className="col-3 text-light d-flex flex-column align-items-center mt-4">
          <Aside />
          <MainMenu />
        </aside>
        <div className="col-9 container mt-3">
          <div className="d-flex justify-content-between align-items-center">
            <SearchBar />
            <h6 className="text-white">Page 1</h6>
          </div>
          <div className="d-flex justify-content-between flex-wrap gap-2">
            {pokemon.map((item) => (
              <CardPokemon key={item.id} pokemon={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
