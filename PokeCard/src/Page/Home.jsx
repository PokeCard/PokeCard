import Aside from "../Component/Aside";
import CardPokemon from "../Component/CardPokemon";
import "../App.css";
import SearchBar from "../Component/SearchBar";
import MainMenu from "../Component/MainMenus";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../Component/Pagination";
import Swal from "sweetalert2";

function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 20; // Fixed limit
  const [level, setLevel] = useState(1);
  const [titlePlayer, setTitlePlayer] = useState("Poke Trainee");
  const [loadingSpin, setLoadingSpin] = useState(false);

  const fetchFavPoke = async () => {
    try {
      setLoadingSpin(true);
      const { data } = await axios.get(
        "https://boggy-well-tourmaline.glitch.me/fav"
      );
      setLevel(data.length);
      if (data.length >= 5 && data.length < 10) {
        setTitlePlayer("Poke Warrior");
      } else if (data.length >= 10 && data.length < 20) {
        setTitlePlayer("Poke Master");
      } else {
        setTitlePlayer("Poke Trainee");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPokemon = async (offset) => {
    try {
      setLoadingSpin(true);
      const { data } = await axios.get(
        `https://pokeapi.deno.dev/pokemon?offset=${offset}&limit=${limit}`
      );
      setPokemon(data);
      setLoadingSpin(false);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
  };

  //handle search
  const handleSearch = async (search) => {
    try {
      let { data } = await axios.get(
        `https://pokeapi.deno.dev/pokemon/${search}`
      );

      if (!data) {
        throw Error("Pokemon Not Found!");
      }

      setPokemon([data]);
      console.log(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Pokemon Not Found!`,
      });
    }
  };

  const handleChange = (search) => {
    search.preventDefault();
    const { value } = search.target[0];
    handleSearch(value);
  };

  useEffect(() => {
    fetchPokemon(offset);
  }, [offset]);

  useEffect(() => {
    fetchFavPoke();
  }, []);

  return (
    <>
      <section
        className="d-lg-flex container-fluid min-vh-100 pt-2 "
        style={{ background: "#0E181F" }}
      >
        <aside className="lg-col-3 text-light d-flex flex-column align-items-center mt-5">
          <Aside level={level} titlePlayer={titlePlayer} />
          <MainMenu />
        </aside>
        <div className="col-9 container mt-2">
          <div className="d-md-flex justify-content-between align-items-center">
            <SearchBar
              label="All Pokemon"
              handleChange={handleChange}
              handleSearch={handleSearch}
              display="block"
            />
            <Pagination offset={offset} setOffset={setOffset} limit={limit} />
          </div>
          <div className="d-flex justify-content-between flex-wrap gap-2 pb-4">
            {pokemon.map((item) => (
              <CardPokemon
                key={item.id}
                pokemon={item}
                loadingSpin={loadingSpin}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
