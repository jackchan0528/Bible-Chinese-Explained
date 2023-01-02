import logo from './logo.svg';
import './App.css';
import React, { Component, useState, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import GetBibleVerse from './components/getBibleVerse';
import GetStatus from './components/getStatus';
import Testing from './components/testing';
import GetBasicBibleInfo from './components/getBasicBibleInfo';
import GetVerse from './components/getVerse';
import HomePage from './components/homepage';
import GetExplanation from './components/getExplanation';
import NotFound from './components/notFound';

function App() {
  const [selectedBook, setSelectedBook] = useState("");
  const [selectedChapter, setSelectedChapter] = useState(1);

  console.log("Current selection:", selectedBook, selectedChapter)

  const books = [
    { id: "1", engShortName: "Gen", engLongName: "Genesis", shortName: "創", longName: "創世記", engShorterName: "Ge", numberOfChapters: 50 },
    { id: "2", engShortName: "Ex", engLongName: "Exodus", shortName: "出", longName: "出埃及記", engShorterName: "Ex", numberOfChapters: 40 },
    { id: "3", engShortName: "Lev", engLongName: "Leviticus", shortName: "利", longName: "利未記", engShorterName: "Le", numberOfChapters: 27 },
    { id: "4", engShortName: "Num", engLongName: "Numbers", shortName: "民", longName: "民數記", engShorterName: "Nu", numberOfChapters: 36 },
    { id: "5", engShortName: "Deut", engLongName: "Deuteronomy", shortName: "申", longName: "申命記", engShorterName: "De", numberOfChapters: 34 },
    { id: "6", engShortName: "Josh", engLongName: "Joshua", shortName: "書", longName: "約書亞記", engShorterName: "Jos", numberOfChapters: 24 },
    { id: "7", engShortName: "Judg", engLongName: "Judges", shortName: "士", longName: "士師記", engShorterName: "Jud", numberOfChapters: 21 },
    { id: "8", engShortName: "Ruth", engLongName: "Ruth", shortName: "得", longName: "路得記", engShorterName: "Ru", numberOfChapters: 4 },
    { id: "9", engShortName: "1 Sam", engLongName: "First Samuel", shortName: "撒上", longName: "撒母耳記上", engShorterName: "1Sa", numberOfChapters: 31 },
    { id: "10", engShortName: "2 Sam", engLongName: "Second Samuel", shortName: "撒下", longName: "撒母耳記下", engShorterName: "2Sa", numberOfChapters: 24 },
    { id: "11", engShortName: "1 Kin", engLongName: "First Kings", shortName: "王上", longName: "列王紀上", engShorterName: "1Ki", numberOfChapters: 22 },
    { id: "12", engShortName: "2 Kin", engLongName: "Second Kings", shortName: "王下", longName: "列王紀下", engShorterName: "2Ki", numberOfChapters: 25 },
    { id: "13", engShortName: "1 Chr", engLongName: "First Chronicles", shortName: "代上", longName: "歷代志上", engShorterName: "1Ch", numberOfChapters: 29 },
    { id: "14", engShortName: "2 Chr", engLongName: "Second Chronicles", shortName: "代下", longName: "歷代志下", engShorterName: "2Ch", numberOfChapters: 36 },
    { id: "15", engShortName: "Ezra", engLongName: "Ezra", shortName: "拉", longName: "以斯拉記", engShorterName: "Ezr", numberOfChapters: 10 },
    { id: "16", engShortName: "Neh", engLongName: "Nehemiah", shortName: "尼", longName: "尼希米記", engShorterName: "Ne", numberOfChapters: 13 },
    { id: "17", engShortName: "Esth", engLongName: "Esther", shortName: "斯", longName: "以斯帖記", engShorterName: "Es", numberOfChapters: 10 },
    { id: "18", engShortName: "Job", engLongName: "Job", shortName: "伯", longName: "約伯記", engShorterName: "Job", numberOfChapters: 42 },
    { id: "19", engShortName: "Ps", engLongName: "Psalms", shortName: "詩", longName: "詩篇", engShorterName: "Ps", numberOfChapters: 150 },
    { id: "20", engShortName: "Prov", engLongName: "Proverbs", shortName: "箴", longName: "箴言", engShorterName: "Pr", numberOfChapters: 31 },
    { id: "21", engShortName: "Eccl", engLongName: "Ecclesiastes", shortName: "傳", longName: "傳道書", engShorterName: "Ec", numberOfChapters: 12 },
    { id: "22", engShortName: "Song", engLongName: "Song of Solomon", shortName: "歌", longName: "雅歌", engShorterName: "So", numberOfChapters: 8 },
    { id: "23", engShortName: "Is", engLongName: "Isaiah", shortName: "賽", longName: "以賽亞書", engShorterName: "Isa", numberOfChapters: 66 },
    { id: "24", engShortName: "Jer", engLongName: "Jeremiah", shortName: "耶", longName: "耶利米書", engShorterName: "Jer", numberOfChapters: 52 },
    { id: "25", engShortName: "Lam", engLongName: "Lamentations", shortName: "哀", longName: "耶利米哀歌", engShorterName: "La", numberOfChapters: 5 },
    { id: "26", engShortName: "Ezek", engLongName: "Ezekiel", shortName: "結", longName: "以西結書", engShorterName: "Eze", numberOfChapters: 48 },
    { id: "27", engShortName: "Dan", engLongName: "Daniel", shortName: "但", longName: "但以理書", engShorterName: "Da", numberOfChapters: 12 },
    { id: "28", engShortName: "Hos", engLongName: "Hosea", shortName: "何", longName: "何西阿書", engShorterName: "Ho", numberOfChapters: 14 },
    { id: "29", engShortName: "Joel", engLongName: "Joel", shortName: "珥", longName: "約珥書", engShorterName: "Joe", numberOfChapters: 3 },
    { id: "30", engShortName: "Amos", engLongName: "Amos", shortName: "摩", longName: "阿摩司書", engShorterName: "Am", numberOfChapters: 9 },
    { id: "31", engShortName: "Obad", engLongName: "Obadiah", shortName: "俄", longName: "俄巴底亞書", engShorterName: "Ob", numberOfChapters: 1 },
    { id: "32", engShortName: "Jon", engLongName: "Jonah", shortName: "拿", longName: "約拿書", engShorterName: "Jon", numberOfChapters: 4 },
    { id: "33", engShortName: "Mic", engLongName: "Micah", shortName: "彌", longName: "彌迦書", engShorterName: "Mic", numberOfChapters: 7 },
    { id: "34", engShortName: "Nah", engLongName: "Nahum", shortName: "鴻", longName: "那鴻書", engShorterName: "Na", numberOfChapters: 3 },
    { id: "35", engShortName: "Hab", engLongName: "Habakkuk", shortName: "哈", longName: "哈巴谷書", engShorterName: "Hab", numberOfChapters: 3 },
    { id: "36", engShortName: "Zeph", engLongName: "Zephaniah", shortName: "番", longName: "西番雅書", engShorterName: "Zep", numberOfChapters: 3 },
    { id: "37", engShortName: "Hag", engLongName: "Haggai", shortName: "該", longName: "哈該書", engShorterName: "Hag", numberOfChapters: 2 },
    { id: "38", engShortName: "Zech", engLongName: "Zechariah", shortName: "亞", longName: "撒迦利亞書", engShorterName: "Zec", numberOfChapters: 14 },
    { id: "39", engShortName: "Mal", engLongName: "Malachi", shortName: "瑪", longName: "瑪拉基書", engShorterName: "Mal", numberOfChapters: 4 },
    { id: "40", engShortName: "Matt", engLongName: "Matthew", shortName: "太", longName: "馬太福音", engShorterName: "Mt", numberOfChapters: 28 },
    { id: "41", engShortName: "Mark", engLongName: "Mark", shortName: "可", longName: "馬可福音", engShorterName: "Mr", numberOfChapters: 16 },
    { id: "42", engShortName: "Luke", engLongName: "Luke", shortName: "路", longName: "路加福音", engShorterName: "Lu", numberOfChapters: 24 },
    { id: "43", engShortName: "John", engLongName: "John", shortName: "約", longName: "約翰福音", engShorterName: "Joh", numberOfChapters: 21 },
    { id: "44", engShortName: "Acts", engLongName: "Acts", shortName: "徒", longName: "使徒行傳", engShorterName: "Ac", numberOfChapters: 28 },
    { id: "45", engShortName: "Rom", engLongName: "Romans", shortName: "羅", longName: "羅馬書", engShorterName: "Ro", numberOfChapters: 16 },
    { id: "46", engShortName: "1 Cor", engLongName: "First Corinthians", shortName: "林前", longName: "哥林多前書", engShorterName: "1Co", numberOfChapters: 16 },
    { id: "47", engShortName: "2 Cor", engLongName: "Second Corinthians", shortName: "林後", longName: "哥林多後書", engShorterName: "2Co", numberOfChapters: 13 },
    { id: "48", engShortName: "Gal", engLongName: "Galatians", shortName: "加", longName: "加拉太書", engShorterName: "Ga", numberOfChapters: 6 },
    { id: "49", engShortName: "Eph", engLongName: "Ephesians", shortName: "弗", longName: "以弗所書", engShorterName: "Eph", numberOfChapters: 6 },
    { id: "50", engShortName: "Phil", engLongName: "Philippians", shortName: "腓", longName: "腓立比書", engShorterName: "Php", numberOfChapters: 4 },
    { id: "51", engShortName: "Col", engLongName: "Colossians", shortName: "西", longName: "歌羅西書", engShorterName: "Col", numberOfChapters: 4 },
    { id: "52", engShortName: "1 Thess", engLongName: "First Thessalonians", shortName: "帖前", longName: "帖撒羅尼迦前書", engShorterName: "1Th", numberOfChapters: 5 },
    { id: "53", engShortName: "2 Thess", engLongName: "Second Thessalonians", shortName: "帖後", longName: "帖撒羅尼迦後書", engShorterName: "2Th", numberOfChapters: 3 },
    { id: "54", engShortName: "1 Tim", engLongName: "First Timothy", shortName: "提前", longName: "提摩太前書", engShorterName: "1Ti", numberOfChapters: 6 },
    { id: "55", engShortName: "2 Tim", engLongName: "Second Timothy", shortName: "提後", longName: "提摩太後書", engShorterName: "2Ti", numberOfChapters: 4 },
    { id: "56", engShortName: "Titus", engLongName: "Titus", shortName: "多", longName: "提多書", engShorterName: "Tit", numberOfChapters: 3 },
    { id: "57", engShortName: "Philem", engLongName: "Philemon", shortName: "門", longName: "腓利門書", engShorterName: "Phm", numberOfChapters: 1 },
    { id: "58", engShortName: "Heb", engLongName: "Hebrews", shortName: "來", longName: "希伯來書", engShorterName: "Heb", numberOfChapters: 13 },
    { id: "59", engShortName: "James", engLongName: "James", shortName: "雅", longName: "雅各書", engShorterName: "Jas", numberOfChapters: 5 },
    { id: "60", engShortName: "1 Pet", engLongName: "First Peter", shortName: "彼前", longName: "彼得前書", engShorterName: "1Pe", numberOfChapters: 5 },
    { id: "61", engShortName: "2 Pet", engLongName: "Second Peter", shortName: "彼後", longName: "彼得後書", engShorterName: "2Pe", numberOfChapters: 3 },
    { id: "62", engShortName: "1 John", engLongName: "First John", shortName: "約一", longName: "約翰一書", engShorterName: "1Jo", numberOfChapters: 5 },
    { id: "63", engShortName: "2 John", engLongName: "second John", shortName: "約二", longName: "約翰二書", engShorterName: "2Jo", numberOfChapters: 1 },
    { id: "64", engShortName: "3 John", engLongName: "Third John", shortName: "約三", longName: "約翰三書", engShorterName: "3Jo", numberOfChapters: 1 },
    { id: "65", engShortName: "Jude", engLongName: "Jude", shortName: "猶", longName: "猶大書", engShorterName: "Jude", numberOfChapters: 1 },
    { id: "66", engShortName: "Rev", engLongName: "Revelation", shortName: "啟", longName: "啟示錄", engShorterName: "Re", numberOfChapters: 22 },
  ];

  const handleSelectedBook = (book) => { setSelectedBook(book); }
  const handleSelectedChapter = (chap) => { setSelectedChapter(chap); }

  const handlePreviousChapter = () => {
    // be careful that selectedChapter is a string, while numberOfChapters is a number, so we convert selectedChapter to number
    const currentChapter = Number(selectedChapter)
    if (currentChapter === 1) {
      if (selectedBook === "創") {
        setSelectedChapter(books[65].numberOfChapters)
        setSelectedBook(books[65].shortName)
      } else {
        var index = books.findIndex(book => book.shortName === selectedBook)
        setSelectedChapter(books[index - 1].numberOfChapters)
        setSelectedBook(books[index - 1].shortName)
      }
    } else {
      setSelectedChapter(currentChapter - 1)
    }
    window.scrollTo(0, 0)
  }
  const handleNextChapter = () => {
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
    window.scrollTo(0, 0)
  }

  return (
    <React.Fragment>
      <Routes>
        {/* <Route path="/getexplanation"
          render={(props) =>
            <GetExplanation {...props} />}
        /> */}
        <Route path="/getexplanation"
          element={<GetExplanation />}
        />
        {/* <Route path="/products/:id" component={ProductDetails} /> */}
        {/* <Route
          path="/products"
          render={props => <Products sortBy="newest" {...props} />}
        /> */}
        {/* <Route path="/posts/:year?/:month?" component={Posts} /> */}
        {/* <Route path="/admin" component={Dashboard} /> */}
        {/* <Redirect from="/messages" to="/posts" /> */}
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/" exact element={
          <HomePage
            selectedBook={selectedBook}
            selectedChapter={selectedChapter}
            onSelectedBook={(book) => { handleSelectedBook(book) }}
            onSelectedChapter={(chap) => { handleSelectedChapter(chap) }}
            books={books}
          />}
        />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
        {/* <Navigate to="/not-found" /> */}
      </Routes>
      <div className="App flex flex-col" >
        {/* <div style={{ maxHeight: '75vh', overflow: 'auto' }}> */}
        {/* < Testing /> */}
        {/* < GetExplanation /> */}
        {/* </div> */}
        {/* < HomePage
          selectedBook={selectedBook}
          selectedChapter={selectedChapter}
          onSelectedBook={(book) => { handleSelectedBook(book) }}
          onSelectedChapter={(chap) => { handleSelectedChapter(chap) }}
          books={books}
        /> */}
        {/* < GetBibleVerse /> */}
        {/* < GetStatus /> */}
        {/* < GetBasicBibleInfo /> */}
        {/* <div style={{ maxHeight: '75vh', overflow: 'auto' }}> */}
        {selectedBook && <div className='max-h-screen pb-20 bg-[#FBD7B1]'>
          < GetVerse
            selectedBook={selectedBook}
            selectedChapter={selectedChapter}
            books={books}
          />
        </div>}
        <div className='fixed inset-x-4 bottom-0 h-16'>
          {selectedBook && <div className="grid grid-flow-col auto-rows-max inline-flex h-auto px-2 py-2">
            <button
              className='bg-gray-400 opacity-90 hover:bg-[#F09E6A] text-white font-bold py-2 px-2 rounded-full'
              onClick={() => handlePreviousChapter(selectedChapter)}
            >
              上一章
            </button>
            <button
              className='bg-gray-400 opacity-90 hover:bg-[#F09E6A] text-white font-bold py-2 px-2 rounded-full'
              onClick={() => handleNextChapter(selectedChapter)}
            >
              下一章
            </button>

          </div>}
        </div>
        {/* Get a main Body when Book is not selected */}
        {/* {!selectedBook && <h3 className='bg-[#FBD7B1]'>Please select a book</h3>} */}
      </div>
    </React.Fragment >
  );
}

export default App;