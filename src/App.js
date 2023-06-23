import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [joke, setJoke] = useState('');

  const fetchJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => setJoke(data.value))
      .catch(error => console.log(error));
  };

  return (
    <>
      <img className="emoji" src="https://i.pinimg.com/originals/8a/85/d2/8a85d2fa604bdc78b35359a8bcb270d3.png" alt="Cringe Emoji" ></img>
      <div className="container">
        <h1>Chuck Jokes</h1>
        <p className="p"><b>{joke}</b></p>
        <button onClick={fetchJoke} className="button">Hit me!</button>
      </div>
    </>
  );
};

export default App;
