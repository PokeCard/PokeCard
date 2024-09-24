import axios from 'axios'

const Home1 = () => {
  const [pokemon, setPokemon] = useState([])
  // GET DATA
  const readData = async () => {
    try {
      // setIsLoading(true)
      let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon')
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
    <div>

    </div>
  )
}

export default Home1
