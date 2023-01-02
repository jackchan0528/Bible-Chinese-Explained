import React, { Component, useState, useEffect } from "react";
import GetExplanation from "./getExplanation";
import Testing from "./testing";
import {
  Routes,
  Route,
  Navigate,
  Link,
  useNavigate,
  Redirect,
} from "react-router-dom";

const GetVerse = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // chineses, chap, sec, version, strong, gb
  const chineses = props.selectedBook;
  const chap = props.selectedChapter;
  // const version = props.params.version;
  // const strong = props.params.strong;
  // const gb = props.params.gb;
  const version = "nstrunv";
  const strong = 1;
  const gb = 0;

  // console.log(
  //   `https://bible.fhl.net/json/qb.php?chineses=${chineses}&chap=${chap}&sec=${sec}&version=${version}&strong=${strong}&gb=${gb}`
  // );

  const fetchBibleData = () => {
    fetch(
      `https://bible.fhl.net/json/qb.php?chineses=${chineses}&chap=${chap}&version=${version}&strong=${strong}&gb=${gb}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };
  let navigate = useNavigate();
  const handleExplanation = (book, chapter, verse) => {
    console.log("i am printing prop:", book, chapter, verse);
    // <Link to="/getexplanation">GetExplanation</Link>;
    // console.log(`getexplanation/:${book}?/:${chapter}?/:${verse}?`);
    return navigate("getexplanation", { verse: `${verse}` });
    // <Routes>
    //   <Route path="*" element={<Navigate to="/not-found" replace />} />;
    // </Routes>
    // <Route path='/redirect-page' element={ <Redirect to="/error-page" /> }/>
  };

  const GenerateVerse = (props) => {
    return props.verses.map((verse) => (
      <div
        key={verse.sec}
        className="text-left bg-[#FBD7B1] px-4 py-2 transition duration-300 ease-in-out hover:bg-[#F8BB8B] text-2xl"
        onClick={
          () =>
            navigate("getexplanation", {
              state: {
                selectedBook: props.selectedBook,
                selectedChapter: props.selectedChapter,
                selectedVerse: verse,
              },
            })
          // handleExplanation(
          //   props.selectedBook,
          //   props.selectedChapter,
          //   verse.sec
          // )
        }
      >
        {verse.sec} {verse.bible_text}
      </div>
    ));
  };

  useEffect(() => {
    fetchBibleData();
  }, [props.selectedBook, props.selectedChapter]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    // console.log(items.record[0].title);
    const verses = items.record;
    // console.table(verses);

    const chapterChineseFullName = props.books.filter((book) => {
      return book.shortName === props.selectedBook;
    })[0].longName;

    return (
      <div className="bg-[#F2AA7E]">
        <h1 className="text-xl font-bold text-center">列出聖經經文</h1>
        <h2 className="text-left font-bold text-3xl bg-[#FACFAD]">
          《{chapterChineseFullName}》 第{items.record[0].chap}章
        </h2>
        <GenerateVerse
          verses={items.record}
          selectedBook={props.selectedBook}
          selectedChapter={props.selectedChapter}
        />
      </div>
    );

    // return JSON.stringify(items);
  }
};

export default GetVerse;
