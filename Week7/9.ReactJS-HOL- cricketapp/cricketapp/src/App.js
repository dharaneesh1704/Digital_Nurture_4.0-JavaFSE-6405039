import React from 'react';
import List_of_Players from './list_of_players';
import Score_below_70 from './score_below_70';
import Odd_Players from './odd_players';
import Even_Players from './even_players';
import List_of_Indian_Players from './list_of_indian_players';

function App() {
  var flag = false;

  var players = [
    { name: 'Dhoni', score: 98 },
    { name: 'Virat', score: 65 },
    { name: 'Rohit', score: 72 },
    { name: 'Rahul', score: 48 },
    { name: 'Jadeja', score: 77 },
    { name: 'Bumrah', score: 33 },
    { name: 'Shami', score: 84 },
    { name: 'Gill', score: 59 },
    { name: 'Ashwin', score: 95 },
    { name: 'Pant', score: 43 },
    { name: 'Hardik', score: 66 }
  ];

  var indian_team = {
    first: 'Dhoni',
    second: 'Virat',
    third: 'Rohit',
    fourth: 'Rahul',
    fifth: 'Jadeja',
    sixth: 'Shami'
  };

  var t20_players = ['First Player', 'Second Player', 'Third Player'];
  var ranji_trophy_players = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  var indian_players = t20_players.concat(ranji_trophy_players);

  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <List_of_Players players={players} />
        <hr />
        <h1>Players with Score Below 70</h1>
        <Score_below_70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Indian Team</h1>
        <h2>Odd Players</h2>
        <Odd_Players first={indian_team.first} third={indian_team.third} fifth={indian_team.fifth} />
        <hr />
        <h2>Even Players</h2>
        <Even_Players second={indian_team.second} fourth={indian_team.fourth} sixth={indian_team.sixth} />
        <hr />
        <h2>Merged Indian Players List</h2>
        <List_of_Indian_Players indian_players={indian_players} />
      </div>
    );
  }
}

export default App;
