import "./pokemonCard.style.css"
import Button from "../button/button.component"

export default function PokemonCard(props){
 const {pokemon, onClick} = props

 
 return(
  <section className="pokemonCard">
   <img src={pokemon.img} alt={pokemon.name} />
   <span>#{pokemon.id}</span>
   <h3>{pokemon.name}</h3>
   <Button 
   buttonText = "Details"
   onClick={()=>onClick(pokemon.name)}
    />
  </section>
 )
}