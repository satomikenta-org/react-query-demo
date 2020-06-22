import React, { useState } from 'react';
import { useQuery, useQueryCache } from 'react-query';
import { useHistory } from 'react-router-dom';
import { mockFetch } from '../queries/pokemon';

const Demo = () => {
  const history = useHistory();
  const queryCache = useQueryCache();
  const [ showTargetPokemonName, setShowTargetPokemonName ] = useState(false);
  const { status, data: message, error } = useQuery('message', mockFetch);
  
  if (status == 'loading') return <h1>Loading....</h1>;
  if (error) return <h1>Error: {error}</h1>

  return (
    <div>
      <button onClick={() => history.push('/')}>戻る</button>
      <h2>{message}</h2>
      <div style={{ margin: '15px' }}>
        We can also use React-Query as State Management like bellow.  
      </div>
      <button onClick={() => setShowTargetPokemonName(true)}>最後に捕まえたポケモンを表示</button>
      { showTargetPokemonName && (
        <img 
          src={queryCache.getQueryData('targetPokemon')?.back_default} 
          alt="まだいないようです..." 
          style={{ width: '300px', height: '300px'}}
        />
      )}
    </div>
  )
}

export default Demo;