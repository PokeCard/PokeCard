import axios from 'axios'
import { useEffect, useState } from 'react'
import Card1 from '../Components/Card1'

const Home1 = () => {
  const [pokemon, setPokemon] = useState([])
  // GET DATA
  const readData = async () => {
    try {
      // setIsLoading(true)
      let { data } = await axios.get('https://pokeapi.deno.dev/pokemon?limit=20')
      setPokemon(data)


      console.log(data)
      // setIsLoading(false)
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => { readData(); }, [])

  return (
    <div className="container">
      <div className="row">

        {pokemon.map((item, index) => <Card1 item={item} key={index} />)}

      </div>

    </div>
  )
}

export default Home1
