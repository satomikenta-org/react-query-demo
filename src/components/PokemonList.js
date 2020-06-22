import React from 'react';
import Pokemon from './Pokemon';


const PokemonList = ({ pokemons }) => {
  return (
    <>
      { pokemons.map( pokemon => <Pokemon pokemon={pokemon} key={pokemon.name}/> ) }
    </>
  )
}

export default React.memo(PokemonList);