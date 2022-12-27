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
  const [selectedBook, setSelectedBook] = useState("");
  const [selectedChapter, setSelectedChapter] = useState(1);

  console.log("Current selection:", selectedBook, selectedChapter)

  // const chineses = selectedBook;
  // const chap = selectedChapter;
  // const version = "nstrunv";
  // const strong = 1;
  // const gb = 0;
  // const getVerseParams = { selectedBook, selectedChapter, version, strong, gb }



  const handleSelectedBook = (book) => { setSelectedBook(book); }
  const handleSelectedChapter = (chap) => { setSelectedChapter(chap); }

  return (
    <React.Fragment>
      <div className="App">
        {/* < Testing /> */}
        < HomePage
          // key={[selectedBook, selectedChapter]}
          // key={selectedBook}
          selectedBook={selectedBook}
          selectedChapter={selectedChapter}
          onSelectedBook={(book) => { handleSelectedBook(book) }}
          onSelectedChapter={(chap) => { handleSelectedChapter(chap) }}
        />
        {/* < GetBibleVerse /> */}
        {/* < GetStatus /> */}
        {/* < GetBasicBibleInfo /> */}
        {selectedBook && < GetVerse
          // key={[selectedBook, selectedChapter]} 
          selectedBook={selectedBook}
          selectedChapter={selectedChapter}
        // params={getVerseParams} 
        />}
        {/* Get a main Body when Book is not selected */}
        {!selectedBook && <h3>Please select a book</h3>}
        {/* < GetVerse chineses="羅" chap="1" sec="1" version="nstrunv" strong="1" gb="0" /> */}
      </div>
    </React.Fragment >
  );
}

export default App;