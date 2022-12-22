import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import GetBibleVerse from './components/getBibleVerse';
import GetStatus from './components/getStatus';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <h1 className="text-3xl">Hello World!</h1>
      </div >
      {/* < GetBibleVerse /> */}
      < GetStatus />
    </React.Fragment >
  );
}

export default App;
