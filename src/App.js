import { useEffect, useState } from 'react';
import './App.css';
import Button from "./components/button/button.component"
import AllPokemons from "./components/allPokemon/allPokemon.component"
import SinglePokemon from "./components/singlePokemon/singlePokemon.component"

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [isMethodForSearchChoosen, setIsMethodForSearchChoosen] = useState(false)
  const [pokemonSearchType, setPokemonSearchType] = useState()

  async function createFirstGeneration() {
    const baseURL = "https://pokeapi.co/api/v2/pokemon/"
    const firstGenPokemon = []

    for (let i = 1; i < 151; i++) {
      await fetch(`${baseURL}${i}`)
        .then(res => res.json())
        .then(data => {
          let typeArray = []
          if (data.types.length > 1) {
            for (let i = 0; i < data.types.length; i++) {
              typeArray.push(data.types[i].type.name)
            }
          } else {
            typeArray = data.types[0].type.name
          }
          const pokemon = {
            id: data.id,
            name: `${data.name.charAt(0).toUpperCase()}${data.name.slice(1)}`,
            type: typeArray,
            img: data.sprites.other['official-artwork'].front_default,
            height: data.height / 10,
            weight: data.weight / 10,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defence: data.stats[2].base_stat,
            specialAttack: data.stats[3].base_stat,
            specialDefense: data.stats[4].base_stat,
            speed: data.stats[5].base_stat,
          }
          firstGenPokemon.push(pokemon)
        })
        .catch(e => console.log(e))
    }
    setPokemonData(firstGenPokemon)
  }

  useEffect(() => {
    createFirstGeneration();
  }, [])

  function handleButtonClick(searchType) {
    setPokemonSearchType(searchType)
    setIsMethodForSearchChoosen(true)
  }

  function goBackToMenu(){
    setIsMethodForSearchChoosen(false)
    setPokemonSearchType("")
  }

  return (
    <section className="app">
      
      {!isMethodForSearchChoosen &&
        <div className="appInfo">
          <h1>Welcome!</h1>
          <p>You can check all pokemon from First Generation or search pokemon by inputing name or pokedex number</p>
          <Button
            buttonText="Single Pokemon"
            onClick={()=> handleButtonClick("singlePokemon")}
          />
          <Button
            buttonText="First Generation"
            onClick={()=>handleButtonClick("allPokemon")}
          />
        </div>
      }
      {pokemonSearchType === "allPokemon" && 
        <AllPokemons 
          pokemonData = {pokemonData} 
          goBackToMenu = {goBackToMenu}
        />}
      {pokemonSearchType === "singlePokemon" && 
      <SinglePokemon 
        pokemonData = {pokemonData}
        goBackToMenu = {goBackToMenu}
      />}
    </section>
  );
}

export default App;
