import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  ProgressBar,
  Row,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import Stat from "../Components/Stat";
import CardDetail from "../Components/CardDetail";

const Detail = () => {
  let { id } = useParams();
  const [detailPokemon, setDetailPokemon] = useState([]);
  // console.log(detailPokemon.stats.HP)

  const fetchDetail = async () => {
    try {
      let response = await axios.get(`https://pokeapi.deno.dev/pokemon/${id}`);
      console.log(response.data);
      setDetailPokemon(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  if (!detailPokemon || !detailPokemon.stats) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{ backgroundColor: "#0E181F" }}
      className="text-white min-vh-100"
    >
      <Container className="pt-3">
        <h3>Detail Pokemon</h3>
        <Row>
          <Col
            md={3}
            className="d-flex flex-column justify-content-center gap-5"
          >
            <div>
              <h3 className="mt-3">
                #{detailPokemon.id.toString().padStart(4, "0")}
              </h3>
              <h5>Genus: {detailPokemon.genus}</h5>
            </div>
            <CardDetail
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
            <Button className="btn w-25" style={{ backgroundColor: "#67A15B" }}>
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
