import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import GetBibleVerse from './components/getBibleVerse';
import GetStatus from './components/getStatus';
import Testing from './components/testing';
import GetBasicBibleInfo from './components/getBasicBibleInfo';
import GetVerse from './components/getVerse';
import HomePage from './components/homepage';

function App() {
  const chineses = "羅";
  const chap = 1;
  const version = "nstrunv";
  const strong = 1;
  const gb = 0;
  const getVerseParams = { chineses, chap, version, strong, gb }
  return (
    <React.Fragment>
      <div className="App">
        {/* < Testing /> */}
        {/* < GetBibleVerse /> */}
        {/* < GetStatus /> */}
        {/* < GetBasicBibleInfo /> */}
        {/* < GetVerse params={getVerseParams} /> */}
        {/* < GetVerse chineses="羅" chap="1" sec="1" version="nstrunv" strong="1" gb="0" /> */}
        < HomePage />
      </div>
    </React.Fragment >
  );
}

export default App;
