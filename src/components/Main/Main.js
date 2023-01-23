import React from 'react';
import './main.css';
import logo from './logo.svg';

function Main({setActive}) {
  return (
    <div className="main">
      <img src={logo} className="main-logo" alt="logo"/>
      <p>Enter button</p>
      <button className="main-button" onClick={() => setActive(true)}>
        Enter
      </button>
    </div>
  );
}

export default Main;