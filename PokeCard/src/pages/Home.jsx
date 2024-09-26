import Aside from "../components/Aside";
import CardPokemon from "../components/CardPokemon";
import "../App.css";
import SearchBar from "../components/SearchBar";
import MainMenu from "../components/MainMenus";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  const [pokemon, setPokemon] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.deno.dev/pokemon?offset=1&limit=20"
      );
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
        className="d-flex container-fluid min-vh-100 pt-2"
        style={{ background: "#0E181F" }}
      >
        <aside className="col-3 text-light d-flex flex-column align-items-center mt-4">
          <Aside />
          <MainMenu />
        </aside>
        <div className="col-9 container mb-4 mt-2">
          <div className="d-flex justify-content-between align-items-center">
            <SearchBar label="All Pokemons" />
            <h6 className="text-white">Page 1</h6>
          </div>
          <div className="d-flex justify-content-between flex-wrap gap-2">
            {pokemon.map((item) => (
              <CardPokemon key={item.id} pokemon={item} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
