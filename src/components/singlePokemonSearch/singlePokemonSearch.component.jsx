import "./singlePokemonSearch.style.css"
import Button from "../button/button.component";

export default function SinglePokemonSearch(props) {
  const { findPokemon, value, onChange } = props

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="formComponent" onSubmit={handleSubmit}>
      <label htmlFor="serchingValue">Please input name or pokedex number</label>
      <input
        id="serchingValue"
        value={value}
        onChange={onChange}
        placeholder = "name or pokedex number"
      />
      <Button
        buttonText="Find Pokemon"
        onClick={findPokemon}
      />
    </form>
  )
}