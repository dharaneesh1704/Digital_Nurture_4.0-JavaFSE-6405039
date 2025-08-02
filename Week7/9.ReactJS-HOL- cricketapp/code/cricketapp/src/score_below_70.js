import React from 'react';

function Score_below_70(props) {
  var below = [];

  for (var i = 0; i < props.players.length; i++) {
    if (props.players[i].score <= 70) {
      below.push(props.players[i]);
    }
  }

  return (
    <ul>
      {below.map(function (item, index) {
        return (
          <li key={index}>
            Mr. {item.name} - <span>{item.score}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default Score_below_70;
