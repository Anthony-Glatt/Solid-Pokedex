import { createStore } from "solid-js/store";

const [pokemonStore, setPokemonStore] = createStore({
  pokemon: [
    {
      id: 4,
      name: 'Charmander',
      type: ['fire'],
      height: 4,
      weight: 4
    }
  ]
});

export {pokemonStore, setPokemonStore};