import { createStore } from "solid-js/store";
import { onMount } from "solid-js";

type Pokemon = {
  id: number,
  name: string,
  type: string,
  height: number,
  weight: number
}

const pokemonStore = createStore<Pokemon>({ id:4, name:"charmander", type: "fire", height: 1, weight: 1 });

export const PokemonService = () => {
  const [pokemon, setPokemon] = pokemonStore;

  onMount(() => {
    const pokemonObject = localStorage.getItem('pokemon')
    if (!pokemonObject) return
    console.log('onMount')
    setPokemon(() => JSON.parse(pokemonObject) as unknown as Pokemon)
  })

  const updatePokemon = (pokemon: Pokemon) => {
    setPokemon(() => pokemon)
  }

  return { pokemon, updatePokemon}
}



// export const createCounterStore = () => {
//   const [state, setState] = createStore({
//     pokemon: {
//       id: 0,
//       name: "",
//       type: "",
//       height: 0,
//       weight: 0,
//     }
//   });

//   const updatePokemon = (newPokemon: PokemonValues) => {
//     setState();
//   }
//   return { state, updatePokemon };
// };