import { Component, createSignal } from "solid-js";
import { fetchPokemon, fetchPokemonForm } from "../../api/pokemon";
import Button from "../../components/button/index";
import Input from "../../components/input/index";

const Pokemon: Component = () => {
  const [searchText, setSearchText] = createSignal('');

  const handleSearchChange = (e: Event) => {
    const target = e.target as HTMLButtonElement;
    setSearchText(target.value);
  }
  return (
    <div>
      <div class="search-container">
        <Input 
          name="poke-search"
          type="text"
          placeholder="Search for a Pokemon"
          onChange={handleSearchChange}
        />
        <Button 
          name="search" 
          onClick={() => {fetchPokemon(searchText()), fetchPokemonForm(searchText())}}
        >
          Search
        </Button>
      </div>
      <div class="">
      </div>
    </div>
  )
}

export default Pokemon;
