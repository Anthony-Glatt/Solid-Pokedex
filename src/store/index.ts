import { createStore } from "solid-js/store";

interface PokemonValues {
  id: number,
  name: string,
  type: string,
  height: number,
  weight: number
}

export const createCounterStore = () => {
  const [state, setState] = createStore({
    pokemon: {
      id: 0,
      name: "",
      type: "",
      height: 0,
      weight: 0,
    }
  });

  const updatePokemon = (newPokemon: PokemonValues) => {
    setState();
  }
  return { state, updatePokemon };
};