import { ProgressBar } from "react-bootstrap";


const Stat = ({ detailPokemon }) => {
  const stats = [
    { label: 'HP', value: detailPokemon.stats["HP"], variant: 'success' },
    { label: 'Attack', value: detailPokemon.stats.Attack, variant: 'danger' },
    { label: 'Defense', value: detailPokemon.stats.Defense, variant: 'primary' },
    { label: 'Special Attack', value: detailPokemon.stats["Special Attack"], variant: 'danger' },
    { label: 'Special Defense', value: detailPokemon.stats["Special Defense"], variant: "primary" },
    { label: 'Speed', value: detailPokemon.stats.Speed, variant: 'secondary' },
  ];

  return (
    <>
      {stats.map((stat, index) => (
        <div key={index}
          className="text-center mb-0">{stat.label}
          <ProgressBar now={stat.value} variant={stat.variant} className="mb-2 fw-bold" label={`${stat.value}`} />
        </div>
      ))}
    </>

  )
}

export default Stat
