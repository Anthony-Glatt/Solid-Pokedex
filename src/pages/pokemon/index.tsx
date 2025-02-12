import { Component, createSignal, For } from "solid-js";
import { pokemonStore } from "../../store/pokemon";
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
      <For each={pokemonStore.pokemon} fallback={<div>Loading...</div>}>
        {(pokemon, index) => (
          <Card class={`pokemon-${index}`} number={pokemon.id} name={pokemon.name} images={pokemon.images} />
        )}
      </For>
    </div>
  )
}

export default Pokemon;
