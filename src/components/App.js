import React, { useState } from 'react';
// import Footer from './Footer';
// import Header from './Header';

const names = ['vasa', 'pitya', 'alex', 'an'];

const render = names.map((name, i) => <p key={i}>{name}</p>)

function App() {

  const [res, setRes] = useState('hello');

  const show = () => {
    setRes(res + ' world')
  }

  return (
    <div id="app">
      <h2 onClick={show} >Hello app</h2>
      {res}
    </div>
  );
}

export default App;
