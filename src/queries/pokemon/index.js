import axios from 'axios';

export const fetchPokemons = async () => {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
  return data.results;
};

export const fetchPokemon = async (key, { id } ) => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return data.sprites;
}

export const mockFetch = () => {
  return new Promise(( resolve, reject) => {
    setTimeout(() => resolve('初回以降, ロードが早いはずです.'), 2000);
  });
}