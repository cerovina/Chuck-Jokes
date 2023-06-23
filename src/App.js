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
    <><img className="emoji" src = "emojicringe.png"></img>
    <div className="container">
      <h1>Chuck Jokes</h1>
      <p className="p"><b>{joke}</b></p>
      <button onClick={fetchJoke} className="button">Get Joke</button>
    </div>
    </>
  );
  
};

export default App;
