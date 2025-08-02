import React from 'react';

function List_of_Indian_Players(props) {
  return (
    <ul>
      {props.indian_players.map(function (name, index) {
        return <li key={index}>{name}</li>;
      })}
    </ul>
  );
}

export default List_of_Indian_Players;
