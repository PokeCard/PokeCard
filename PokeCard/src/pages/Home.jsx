import Aside from "../components/Aside";
import CardPokemon from "../components/CardPokemon";
import "../App.css";
import SearchBar from "../components/SearchBar";
import MainMenu from "../components/MainMenus";
import { useEffect, useState } from "react";
import axios from "axios";

import Pagination1 from "../components/Pagination";
import LoadingSpin from "../components/LoadingSpin";

function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 20; // Fixed limit
  const [loadingSpin, setLoadingSpin] = useState(false)

  const fetchPokemon = async (offset) => {
    try {
      setLoadingSpin(true)
      const { data } = await axios.get(
        `https://pokeapi.deno.dev/pokemon?offset=${offset}&limit=${limit}`
      );
      setPokemon(data);
      setLoadingSpin(false)
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
  };

  useEffect(() => {
    fetchPokemon(offset);
  }, [offset]);

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
            <SearchBar label="All Pokemon" />
            <Pagination1 offset={offset} setOffset={setOffset} limit={limit} />
          </div>
          <div className="d-flex justify-content-between flex-wrap gap-2">
            {pokemon.map((item) => (
              <CardPokemon key={item.id} pokemon={item} loadingSpin={loadingSpin} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
