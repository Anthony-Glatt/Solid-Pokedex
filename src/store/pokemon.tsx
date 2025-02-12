import { createStore } from "solid-js/store";

const [pokemonStore, setPokemonStore] = createStore({
  pokemon: [
    {
      id: 4,
      name: 'Charmander',
      type: ['fire'],
      height: 4,
      weight: 4,
      images: {
        back_default: '',
        back_shiny: '',
        front_default: '',
        front_shiny: '',
      }
    }
  ]
});

export {pokemonStore, setPokemonStore};