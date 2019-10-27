import React from 'react';
import Footer from '../static/Footer';
import Header from '../static/Header';
import Home from '../pages/Home';
import './style.scss';

function App() {
  console.log('RENDER APP');
  return (
    <div className="app">
      <Header />
      <main className="page">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
