import React from 'react';
import './App.css';
import sr from './office.png'; 

function App() {
  const element = "Office Space";
  const ItemName = { Name: "DBS", Rent: 50000, Address: "Chennai" };

  
  let colors = [];
  if (ItemName.Rent <= 60000) {
    colors.push('textRed');
  } else {
    colors.push('textGreen');
  }

  return (
    <div className="App">
      <h1>{element}, at Affordable Range</h1>
      <img src={sr} width="25%" height="25%" alt="Office Space" />
      <h1>Name: {ItemName.Name}</h1>
      <h3 className={colors.join(' ')}>Rent: Rs. {ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3>
    </div>
  );
}

export default App;
