import { Component } from "solid-js";
import fetchPokemon from "../../api/pokemon";

const Pokemon: Component = () => {
  return (
    <button onClick={() => fetchPokemon('charmander')}></button>
  )
}

export default Pokemon;
