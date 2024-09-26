const Pagination = ({ offset, setOffset, limit }) => {
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

  // const handleSearch = (e) => {
  //   let search = pokemonData.filter((item) => {
  //     return item.name.toLowerCase().includes(e.target.value);
  //   });
  //   setSearchPokemon(search);
  // };

  return (
    <div>
      <button onClick={handlePrevious} disabled={offset === 0}>
        Previous
      </button>
      <button onClick={handleNext} disabled={offset >= 905}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
