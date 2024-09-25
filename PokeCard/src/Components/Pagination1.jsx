import axios from 'axios';
import { useState, useEffect } from 'react';
import Card1 from './Card1';

const Pagination1 = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 20; // Fixed limit

  const fetchPokemon = async (offset) => {
    try {
      const { data } = await axios.get(`https://pokeapi.deno.dev/pokemon?offset=${offset}&limit=${limit}`);
      setPokemonData(data);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    }
  };

  useEffect(() => {
    fetchPokemon(offset);
  }, [offset]);

  const handleNext = () => {
    if (offset < 905) {
      setOffset((prev) => prev + limit);
    }
  };

  const handlePrevious = () => {
    if (offset > 0) {
      setOffset((prev) => prev - limit);
    }
  };

  return (
    <div>
      <h1>Pokémon List</h1>
      <div className="container">
        <div className="row">
          {pokemonData.map((item, index) => <Card1 item={item} key={index} />)}
        </div>
      </div>
      <button onClick={handlePrevious} disabled={offset === 0}>Previous</button>
      <button onClick={handleNext} disabled={offset >= 905}>Next</button>
    </div>
  );
};

export default Pagination1
