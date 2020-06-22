import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useQuery, useQueryCache } from 'react-query';
import { fetchPokemon } from '../queries/pokemon';

const Detail = () => {

  const { id } = useParams();
  const queryCache = useQueryCache();
  const history = useHistory();

  const { status, data: pokemon, error } = useQuery(['pokemon', { id }], fetchPokemon);

  useEffect(() => {
    queryCache.setQueryData(['targetPokemon'], pokemon); // We can set anything to queryCache with arbitrary key. 
  }, [pokemon]);

  if (status === 'loading') return <h3>Loading...</h3>;

  if (error) return <h3>Error</h3>

  return (
    <div>
      <button onClick={ () => history.push('/') }>戻る</button>
      <h3>このポケモンを捕獲しました！！</h3>
      <img src={ pokemon.back_default } style={{ width: '300px', height: '300px' }}></img>
    </div>
  )
}

export default Detail;