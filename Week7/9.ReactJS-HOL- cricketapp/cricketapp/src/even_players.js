import React from 'react';

function Even_Players(props) {
  return (
    <ul>
      <li>Second: {props.second}</li>
      <li>Fourth: {props.fourth}</li>
      <li>Sixth: {props.sixth}</li>
    </ul>
  );
}

export default Even_Players;
