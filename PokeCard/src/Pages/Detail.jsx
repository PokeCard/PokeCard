import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Card, Col, Container, ProgressBar, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Stat from "../Components/Stat"
import CardDetail from "../Components/CardDetail"


const Detail = () => {
  let { id } = useParams()
  const [detailPokemon, setDetailPokemon] = useState([])
  // console.log(detailPokemon.stats.HP)

  const fetchDetail = async () => {
    try {
      let response = await axios.get(`https://pokeapi.deno.dev/pokemon/${id}`)
      console.log(response.data)
      setDetailPokemon(response.data)

    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => { fetchDetail() }, [])

  if (!detailPokemon || !detailPokemon.stats) {
    return <div>Loading...</div>; // Or some fallback UI
  }

  return (
    <div style={{ backgroundColor: "#0E181F" }} className="text-white min-vh-100">
      <Container>
        <h3>Detail Pokemon</h3>
        <Row>
          <Col md={3} className="d-flex flex-column justify-content-center">
            <h3 className="mt-3">#{detailPokemon.id.toString().padStart(4, '0')}</h3>
            <h5>Genus: {detailPokemon.genus}</h5>
          </Col>
          <Col md={6} className="text-center mb-3">
            <img src={detailPokemon.imageUrl} style={{ width: '20rem' }} className="mx-auto d-block" alt={detailPokemon.name} />
            <h4 className="text-center">{detailPokemon.name}</h4>
            <Button className='btn w-25' style={{ backgroundColor: "#67A15B" }}>Catch</Button>

          </Col>
          <Col md={3} className="d-flex justify-content-center align-items-end">
            <CardDetail widthCard="18rem" cardTitle="Stats" cardContent={<Stat detailPokemon={detailPokemon} />} />
          </Col>
        </Row>

        <div className="d-flex justify-content-between mt-5">
          <CardDetail widthCard="28rem" cardTitle="Abilities" cardContent={<ul>
            {detailPokemon.abilities.map((item, index) => (
              <li key={index} className="mb-2">
                {item.name} <br />
                Effect: {item.effect} <br />
                Description: {item.description}
              </li>
            ))
            }
          </ul>} />

          <CardDetail widthCard="28rem" cardTitle="Description" cardContent={<p>{detailPokemon.description}</p>} />
        </div>


      </Container>

    </div >
  )
}

export default Detail
