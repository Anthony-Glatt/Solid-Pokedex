const fetchPokemon = async (name: string) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
  }
}

export default fetchPokemon;
