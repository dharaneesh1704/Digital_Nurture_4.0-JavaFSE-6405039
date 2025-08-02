import React from 'react';

function Odd_Players(props) {
  return (
    <ul>
      <li>First: {props.first}</li>
      <li>Third: {props.third}</li>
      <li>Fifth: {props.fifth}</li>
    </ul>
  );
}

export default Odd_Players;
