import Aside from "../Component/Aside";
import CardPokemon from "../Component/CardPokemon";
import MainMenu from "../Component/MainMenus";
import SearchBar from "../Component/SearchBar";
import { useEffect, useState } from "react";
import axios from "axios";

function Catch() {
  const [favPoke, setFavPoke] = useState([]);
  const [level, setLevel] = useState(1);
  const [titlePlayer, setTitlePlayer] = useState("Poke Trainee");

  const fetchFavPoke = async () => {
    try {
      const { data } = await axios.get(
        "https://boggy-well-tourmaline.glitch.me/fav"
      );
      setFavPoke(data);
      setLevel(data.length);

      if (data.length >= 5 && data.length < 10) {
        setTitlePlayer("Poke Warrior");
      } else if (data.length >= 10 && data.length < 20) {
        setTitlePlayer("Poke Master");
      } else {
        setTitlePlayer("Poke Trainee");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong!`,
      });
    }
  };

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
            <SearchBar label="My Pokemon" display="none" />
          </div>
          <div className="d-flex justify-content-between flex-wrap gap-2 pb-4 justify-content-md-start">
            {favPoke.map((item) => (
              <CardPokemon key={item.id} pokemon={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Catch;
