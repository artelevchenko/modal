import React, { useState } from 'react';
import './App.css';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';

function App() {
  const [modalActive, setModalActive]= useState(false)
  return (
    <div>
      <Modal active={modalActive} setActive={setModalActive}/>
      <Main setActive={setModalActive}/>
    </div>
  );
}

export default App;
