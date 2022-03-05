import "./singlePokemon.style.css"
import { useState } from "react";

import Button from "../button/button.component";
import SinglePokemonSearch from "../singlePokemonSearch/singlePokemonSearch.component";
import DetailedPokemonCard from "../detailedPokemonCard/detailedPokemonCard.component";

export default function SinglePokemon(props) {
  const { pokemonData, goBackToMenu } = props
  const [serchingValue, setSerchingValue] = useState({ idOrName: "" })
  const [showSearchedPokemon, setShowSearchedPokemon] = useState(false)

  function handleSerchingValueChanging(e) {
    setSerchingValue({ idOrName: e.target.value })
  }


  function findPokemon() {
    setShowSearchedPokemon(true)
  }
  return (
    <section className="singlePokemon">
      <Button 
        buttonText="Go back to menu"
        onClick = {goBackToMenu}
      />
      <SinglePokemonSearch
        findPokemon={findPokemon}
        value={serchingValue.idOrName}
        onChange={handleSerchingValueChanging}
      />

      <section className="showDetailedPokemonCard">
        {showSearchedPokemon &&
          pokemonData
            .filter(pokemon => pokemon.name.toLowerCase() === serchingValue.idOrName.toLowerCase() || pokemon.id === Number(serchingValue.idOrName))
            .map(filteredPokemon => <DetailedPokemonCard key={filteredPokemon.id} pokemon={filteredPokemon}
            />)
        }
      </section>
    </section>
  )
}