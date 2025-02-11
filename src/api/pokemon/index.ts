import { useAppSelector } from "../../store";

const fetchPokemon = async (name: string) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    
    const json = await response.json();
    console.log(json);
    const {pokemonService:{ updatePokemon }} = useAppSelector();
    const newPokemon = {
      id: json.id,
      name: json.name,
      type: json.types[0].type.name,
      height: json.height,
      weight: json.weight
    }
    updatePokemon(newPokemon);
    console.log(newPokemon, 'new pokemon');

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
