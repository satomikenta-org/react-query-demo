import React from 'react';
import { useHistory } from 'react-router-dom';

const Pokemon = ({ pokemon }) => {
  const { name, url } = pokemon;
  const history = useHistory();

  return (
    <div style={{ margin: '10px' }}>
      <div>{ name }</div>
      <button onClick={() => history.push(`/pokemon/${url.split('/pokemon/')[1]}`)} >捕まえる</button>
    </div>
  )
}

export default React.memo(Pokemon);