import React from 'react';

function List_of_Players(props) {
  return (
    <ul>
      {props.players.map(function (item, index) {
        return (
          <li key={index}>
        Mr. {item.name} - <span>{item.score}</span>
          </li>    );
      })}
    </ul>
  );
}

export default List_of_Players;
