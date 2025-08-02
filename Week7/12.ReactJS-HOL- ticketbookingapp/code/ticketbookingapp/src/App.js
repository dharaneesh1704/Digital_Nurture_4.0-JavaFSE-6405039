import React, { useState } from 'react';

function LoginButton({ onClick }) {
  return <button onClick={onClick}>login</button>;
}

function LogoutButton({ onClick }) {
  return <button onClick={onClick}>logout</button>;
}

function GuestGreeting() {
  return (
    <div>
      <h2>welcome guest</h2>
      <p>You can book tickets here</p>
    </div>
  );
}

function UserGreeting() {
  return (
    <div>
      <h2>welcome user</h2>
      <p>you can book tickets:</p>
      <ul>
        <li>Flight A - ₹5000 <button>book</button></li>
        <li>Flight B - ₹4500 <button>book</button></li>
      </ul>
    </div>
  );
}

function Greeting({ isloggedin }) {
  return isloggedin ? <UserGreeting /> : <GuestGreeting />;
}

function App() {
  const [isloggedin, setisloggedin] = useState(false);
  const handlelogin = () => setisloggedin(true);
  const handlelogout = () => setisloggedin(false);

  return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      <h1>ticket booking app</h1>
      {isloggedin
        ? <LogoutButton onClick={handlelogout} />
        : <LoginButton onClick={handlelogin} />
      }
      <Greeting isloggedin={isloggedin} />
    </div>
  );
}

export default App;
