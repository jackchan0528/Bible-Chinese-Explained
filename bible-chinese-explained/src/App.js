import logo from './logo.svg';
import './App.css';
import React, { Component, useState, useEffect } from 'react';
import GetBibleVerse from './components/getBibleVerse';
import GetStatus from './components/getStatus';
import Testing from './components/testing';
import GetBasicBibleInfo from './components/getBasicBibleInfo';
import GetVerse from './components/getVerse';
import HomePage from './components/homepage';

function App() {
  const [selectedBook, setSelectedBook] = useState("創");
  const [selectedChapter, setSelectedChapter] = useState(1);

  console.log(selectedBook)

  const chineses = selectedBook;
  const chap = 1;
  const version = "nstrunv";
  const strong = 1;
  const gb = 0;
  const getVerseParams = { chineses, chap, version, strong, gb }



  const handleSelectedBook = (book) => {
    // console.log(e.target.value);
    setSelectedBook(book);
    console.log("Book selected: ", selectedBook);
  }

  return (
    <React.Fragment>
      <div className="App">
        {/* < Testing /> */}
        < HomePage value={selectedBook} onSelectedBook={(book) => { handleSelectedBook(book) }} />
        {/* < GetBibleVerse /> */}
        {/* < GetStatus /> */}
        {/* < GetBasicBibleInfo /> */}
        < GetVerse key={selectedBook} params={getVerseParams} />
        {/* < GetVerse chineses="羅" chap="1" sec="1" version="nstrunv" strong="1" gb="0" /> */}
      </div>
    </React.Fragment >
  );
}

export default App;