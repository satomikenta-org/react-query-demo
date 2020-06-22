import React from 'react';
import { useQuery } from 'react-query';
import PokemonList from '../components/PokemonList';
import { fetchPokemons } from '../queries/pokemon';
import { useHistory } from 'react-router-dom';

const Home = () => {

  const history = useHistory();

  const { status, data: pokemons, error } = useQuery('pokemons', fetchPokemons);

  if (status === 'loading') return <h2>Loading...</h2>;

  if (error) return <h2>Error: {error}</h2>

  return (
    <div>
      <button　style={{ margin: '15px'}} onClick={() => history.push('/demo')}>ポケモンセンター</button>
      { pokemons && <PokemonList pokemons={ pokemons }/> }
    </div>
  )
}

export default Home;