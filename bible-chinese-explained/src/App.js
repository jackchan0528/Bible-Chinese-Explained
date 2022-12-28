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

  // console.log("Current selection:", selectedBook, selectedChapter)

  // const chineses = selectedBook;
  // const chap = selectedChapter;
  // const version = "nstrunv";
  // const strong = 1;
  // const gb = 0;
  // const getVerseParams = { selectedBook, selectedChapter, version, strong, gb }

  const books = [
    { shortName: "創", longName: "創世記", numberOfChapters: 50 },
    { shortName: "出", longName: "出埃及記", numberOfChapters: 40 },
    { shortName: "利", longName: "利未記", numberOfChapters: 27 },
    { shortName: "民", longName: "民數記", numberOfChapters: 36 },
    { shortName: "申", longName: "申命記", numberOfChapters: 34 },
    { shortName: "書", longName: "約書亞記", numberOfChapters: 24 },
    { shortName: "士", longName: "士師記", numberOfChapters: 21 },
    { shortName: "得", longName: "路得記", numberOfChapters: 4 },
    { shortName: "撒上", longName: "撒母耳記上", numberOfChapters: 31 },
    { shortName: "撒下", longName: "撒母耳記下", numberOfChapters: 24 },
    { shortName: "王上", longName: "列王紀上", numberOfChapters: 22 },
    { shortName: "王下", longName: "列王紀下", numberOfChapters: 25 },
    { shortName: "代上", longName: "歷代志上", numberOfChapters: 29 },
    { shortName: "代下", longName: "歷代志下", numberOfChapters: 36 },
    { shortName: "拉", longName: "以斯拉記", numberOfChapters: 10 },
    { shortName: "尼", longName: "尼希米記", numberOfChapters: 13 },
    { shortName: "斯", longName: "以斯帖記", numberOfChapters: 10 },
    { shortName: "伯", longName: "約伯記", numberOfChapters: 42 },
    { shortName: "詩", longName: "詩篇", numberOfChapters: 150 },
    { shortName: "箴", longName: "箴言", numberOfChapters: 31 },
    { shortName: "傳", longName: "傳道書", numberOfChapters: 12 },
    { shortName: "歌", longName: "雅歌", numberOfChapters: 8 },
    { shortName: "賽", longName: "以賽亞書", numberOfChapters: 66 },
    { shortName: "耶", longName: "耶利米書", numberOfChapters: 52 },
    { shortName: "哀", longName: "耶利米哀歌", numberOfChapters: 5 },
    { shortName: "結", longName: "以西結書", numberOfChapters: 48 },
    { shortName: "但", longName: "但以理書", numberOfChapters: 12 },
    { shortName: "何", longName: "何西阿書", numberOfChapters: 14 },
    { shortName: "珥", longName: "約珥書", numberOfChapters: 3 },
    { shortName: "摩", longName: "阿摩司書", numberOfChapters: 9 },
    { shortName: "俄", longName: "俄巴底亞書", numberOfChapters: 1 },
    { shortName: "拿", longName: "約拿書", numberOfChapters: 4 },
    { shortName: "彌", longName: "彌迦書", numberOfChapters: 7 },
    { shortName: "鴻", longName: "那鴻書", numberOfChapters: 3 },
    { shortName: "哈", longName: "哈巴谷書", numberOfChapters: 3 },
    { shortName: "番", longName: "西番雅書", numberOfChapters: 3 },
    { shortName: "該", longName: "哈該書", numberOfChapters: 2 },
    { shortName: "亞", longName: "撒迦利亞書", numberOfChapters: 14 },
    { shortName: "瑪", longName: "瑪拉基書", numberOfChapters: 4 },
    { shortName: "太", longName: "馬太福音", numberOfChapters: 28 },
    { shortName: "可", longName: "馬可福音", numberOfChapters: 16 },
    { shortName: "路", longName: "路加福音", numberOfChapters: 24 },
    { shortName: "約", longName: "約翰福音", numberOfChapters: 21 },
    { shortName: "徒", longName: "使徒行傳", numberOfChapters: 28 },
    { shortName: "羅", longName: "羅馬書", numberOfChapters: 16 },
    { shortName: "林前", longName: "哥林多前書", numberOfChapters: 16 },
    { shortName: "林後", longName: "哥林多後書", numberOfChapters: 13 },
    { shortName: "加", longName: "加拉太書", numberOfChapters: 6 },
    { shortName: "弗", longName: "以弗所書", numberOfChapters: 6 },
    { shortName: "腓", longName: "腓立比書", numberOfChapters: 4 },
    { shortName: "西", longName: "歌羅西書", numberOfChapters: 4 },
    { shortName: "帖前", longName: "帖撒羅尼迦前書", numberOfChapters: 5 },
    { shortName: "帖後", longName: "帖撒羅尼迦後書", numberOfChapters: 3 },
    { shortName: "提前", longName: "提摩太前書", numberOfChapters: 6 },
    { shortName: "提後", longName: "提摩太後書", numberOfChapters: 4 },
    { shortName: "多", longName: "提多書", numberOfChapters: 3 },
    { shortName: "門", longName: "腓利門書", numberOfChapters: 1 },
    { shortName: "來", longName: "希伯來書", numberOfChapters: 13 },
    { shortName: "雅", longName: "雅各書", numberOfChapters: 5 },
    { shortName: "彼前", longName: "彼得前書", numberOfChapters: 5 },
    { shortName: "彼後", longName: "彼得後書", numberOfChapters: 3 },
    { shortName: "約一", longName: "約翰一書", numberOfChapters: 5 },
    { shortName: "約二", longName: "約翰二書", numberOfChapters: 1 },
    { shortName: "約三", longName: "約翰三書", numberOfChapters: 1 },
    { shortName: "猶", longName: "猶大書", numberOfChapters: 1 },
    { shortName: "啟", longName: "啟示錄", numberOfChapters: 22 },
  ];



  const handleSelectedBook = (book) => { setSelectedBook(book); }
  const handleSelectedChapter = (chap) => { setSelectedChapter(chap); }

  // helper function to get the number of Chpaters in each Book
  // const getNumberOfChaptersOfBook = books.filter((book) => {
  //     return book.shortName === selectedBook
  //   })[0].numberOfChapters

  const handlePreviousChapter = () => {

    if (selectedBook === "創") {
      setSelectedChapter(books[65].numberOfChapters)
      setSelectedBook(books[65].shortName)
    } else {
      var index = books.findIndex(book => book.shortName === selectedBook)
      setSelectedChapter(books[index - 1].numberOfChapters)
      setSelectedBook(books[index - 1].shortName)
    }


    // const target = selectedChapter > 1 ? selectedChapter - 1 : 1
    // setSelectedChapter(target)
  }
  const handleNextChapter = () => {

    // const numberOfChapters = getNumberOfChaptersOfBook
    const numberOfChapters = books.filter((book) => {
      return book.shortName === selectedBook
    })[0].numberOfChapters

    // be careful that selectedChapter is a string, while numberOfChapters is a number, so we convert selectedChapter to number
    const currentChapter = Number(selectedChapter)

    if (currentChapter === numberOfChapters) {
      if (selectedBook === "啟") {
        setSelectedChapter(1)
        setSelectedBook(books[0].shortName)
      } else {
        var index = books.findIndex(book => book.shortName === selectedBook)
        setSelectedChapter(1)
        setSelectedBook(books[index + 1].shortName)
      }
    } else {
      setSelectedChapter(currentChapter + 1)
    }
  }

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
          books={books}
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
        {selectedBook && <div className="grid grid-flow-col auto-rows-max inline-flex">
          <button
            className='bg-[#F6C2A2] hover:bg-[#F09E6A] text-white font-bold py-2 px-4 rounded-full'
            onClick={() => handlePreviousChapter(selectedChapter)}
          >
            上一章
          </button>
          <button
            className='bg-[#F6C2A2] hover:bg-[#F09E6A] text-white font-bold py-2 px-4 rounded-full'
            onClick={() => handleNextChapter(selectedChapter)}
          >
            下一章
          </button>

        </div>}
        {/* Get a main Body when Book is not selected */}
        {!selectedBook && <h3>Please select a book</h3>}
        {/* < GetVerse chineses="羅" chap="1" sec="1" version="nstrunv" strong="1" gb="0" /> */}
      </div>
    </React.Fragment >
  );
}

export default App;