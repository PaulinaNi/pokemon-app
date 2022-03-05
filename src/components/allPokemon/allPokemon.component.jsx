import "./allPokemon.style.css"
import { useState } from "react"

import Button from "../button/button.component"
import DetailedPokemonCard from "../detailedPokemonCard/detailedPokemonCard.component"
import PokemonCard from "../pokemonCard/pokemonCard.component"

export default function AllPokemon(props) {
 const { pokemonData, goBackToMenu } = props

 const [areDetailsShown, setAreDetailsShown] = useState(false)
 const [singlePokemonDetails, setSinglePokemonDetails] = useState([])

 function showDetails(name) {
  setAreDetailsShown(true)
  const singlePokemon = pokemonData.filter(pokemon => pokemon.name === name)
  setSinglePokemonDetails(singlePokemon)
 }

 function goBack() {
  setAreDetailsShown(false)
 }

 const allPokemon =
  <div>
   <h2>All First Generation Pokemon</h2>
   <div className="allPokemon">
    {pokemonData.length === 0 ?
     <h3>Data Loading ... </h3> :
     pokemonData.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={showDetails} />)}
   </div>
  </div>

 const detailedPokemon =
  <div className="allPokemonDetailed">
   <DetailedPokemonCard pokemon={singlePokemonDetails[0]} />
   <Button
    buttonText="Go back to all"
    onClick={goBack}
   />
  </div>


 return (
  <section>
   <Button
    buttonText="Go back to menu"
    onClick={goBackToMenu}
   />
   {!areDetailsShown && allPokemon}
   {areDetailsShown && detailedPokemon}
  </section>
 )
}