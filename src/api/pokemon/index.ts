import { setPokemonStore, pokemonStore } from "../../store/pokemon";

const fetchPokemon = async (name: string) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    
    const json = await response.json();

    const newPokemon = {
      id: json.id,
      name: json.name,
      type: json.types[0].type.name,
      height: json.height,
      weight: json.weight
    }

    setPokemonStore('pokemon', pokemonStore.pokemon.length, newPokemon);
  } catch (error) {
  }
}

const fetchPokemonForm = async (name: string) => {
  const url = `https://pokeapi.co/api/v2/pokemon-form/${name}/`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
  } catch (error) {
  }
}

export { fetchPokemon, fetchPokemonForm };
