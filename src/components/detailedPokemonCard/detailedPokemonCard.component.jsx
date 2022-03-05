import "./detailedPokemonCard.style.css"

export default function DetailedPokemonCard(props) {
 const { pokemon } = props

 let typeString = "|"
 if(Array.isArray(pokemon.type)){
  for (let i = 0; i < pokemon.type.length; i++) {
   typeString = `${typeString}  ${pokemon.type[i].charAt(0).toUpperCase()}${pokemon.type[i].slice(1)} |`
  }
 } else{
  typeString = `| ${pokemon.type.charAt(0).toUpperCase()}${pokemon.type.slice(1)} |`
 }


 return (
  <section className="detailedPokemonCard">
   <img src={pokemon.img} alt={pokemon.name} />
   <span>#{pokemon.id}</span>
   <h3>{pokemon.name}</h3>

   <section className="detailedPokemonCardStats">
    <span className="statName">Type</span> <span className="statValue">{typeString}</span>
    <span className="statName">Weight</span> <span className="statValue">{pokemon.weight} kg</span>
    <span className="statName">Height</span> <span className="statValue">{pokemon.height} m</span>
    <span className="statName">Hp</span> <span className="statValue">{pokemon.hp}</span>
    <span className="statName">Attack</span> <span className="statValue">{pokemon.attack}</span>
    <span className="statName">Defence</span> <span className="statValue">{pokemon.defence}</span>
    <span className="statName">Special Attack</span> <span className="statValue">{pokemon.specialAttack}</span>
    <span className="statName">Special Defense</span> <span className="statValue">{pokemon.specialDefense}</span>
    <span className="statName">Speed</span> <span className="statValue">{pokemon.speed}</span>
   </section>
  </section>
 )
}