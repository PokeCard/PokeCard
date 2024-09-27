import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Stat from "../Component/Stat";
import CardDetail from "../Component/CardDetail";
import { useNavigate, useParams } from "react-router-dom";
import LoadingPoke from "./LoadingPoke.jsx";
import Swal from "sweetalert2";

const Detail = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [detailPokemon, setDetailPokemon] = useState([]);

  const fetchDetail = async () => {
    try {
      let response = await axios.get(`https://pokeapi.deno.dev/pokemon/${id}`);
      console.log(response.data);
      setDetailPokemon(response.data);
    } catch (e) {
      console.log(e);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${e}`,
      });
    }
  };

  const handleAddFav = async () => {
    try {
      await axios.post(
        "https://boggy-well-tourmaline.glitch.me/fav",
        detailPokemon
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Your catched a ${detailPokemon.name}`,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `You've Already Caught a ${detailPokemon.name}`,
        text: "Can Only Catch 1 Pokemon of Each Type!",
      });
    }
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  if (!detailPokemon || !detailPokemon.stats) {
    return <LoadingPoke />;
  }

  return (
    <div
      style={{ backgroundColor: "#0E181F" }}
      className="text-white min-vh-100"
    >
      <Container className="pt-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <h3>Detail Pokemon</h3>
            <button
              className="p-1 pb-2 rounded text-white"
              style={{ backgroundColor: "#152027" }}
              onClick={() => {
                navigate(`/`);
              }}
            >
              &#8592; Home
            </button>
          </div>
          <Button
            className="mx-3"
            onClick={() => {
              navigate(`/catch`);
            }}
          >
            My Pokemon
          </Button>
        </div>
        <Row>
          <Col
            md={3}
            className="d-flex flex-column justify-content-center align-items-center gap-2"
          >
            <div>
              <h3 className="mt-3">
                #{detailPokemon.id.toString().padStart(3, "0")}
              </h3>
              <h5>Genus: {detailPokemon.genus}</h5>
              <h5>Types: {detailPokemon.types.join(", ")}</h5>
            </div>
            <CardDetail
              className="d-none"
              widthCard="17rem"
              cardTitle="Description"
              cardContent={<p>{detailPokemon.description}</p>}
            />
          </Col>
          <Col md={6} className="text-center mb-3">
            <img
              src={detailPokemon.imageUrl}
              style={{ width: "20rem" }}
              className="mx-auto d-block"
              alt={detailPokemon.name}
            />
            <h4 className="text-center">{detailPokemon.name}</h4>
            <Button
              className="btn w-25"
              style={{ backgroundColor: "#67A15B" }}
              onClick={handleAddFav}
            >
              Catch
            </Button>
          </Col>
          <Col md={3} className="d-flex justify-content-center align-items-end">
            <CardDetail
              widthCard="18rem"
              cardTitle="Stats"
              cardContent={<Stat detailPokemon={detailPokemon} />}
            />
          </Col>
        </Row>

        <div className="d-flex justify-content-center mt-5 pb-5">
          <CardDetail
            widthCard="100%"
            cardTitle="Abilities"
            cardContent={
              <ul className="list-unstyled text-center d-flex flex-column gap-3">
                {detailPokemon.abilities.map((item, index) => (
                  <li key={index} className="mb-2 d-flex flex-column">
                    <h6>{item.name}</h6>
                    <div className="">
                      Effect: {item.effect}
                      <br />
                      Description: {item.description}
                    </div>
                  </li>
                ))}
              </ul>
            }
          />
        </div>
      </Container>
    </div>
  );
};

export default Detail;
