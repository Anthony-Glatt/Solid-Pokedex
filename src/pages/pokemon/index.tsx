import { Component, createSignal } from "solid-js";
import { useAppSelector } from "../../store";
import { fetchPokemon, fetchPokemonForm } from "../../api/pokemon";
import Button from "../../components/button/index";
import Input from "../../components/input/index";
import Card from "../../components/card";

const Pokemon: Component = () => {
  const [searchText, setSearchText] = createSignal('');

  const handleSearchChange = (e: Event) => {
    const target = e.target as HTMLButtonElement;
    setSearchText(target.value);
  }

  const {pokemonService: {pokemon}} = useAppSelector();

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
      <Card class="" number={pokemon.id} name={pokemon.name} />
    </div>
  )
}

export default Pokemon;
