import React, { Component, useState, useEffect } from "react";

const GetVerse = (props) => {
  console.log(props);
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

  useEffect(() => {
    fetchBibleData();
  }, [props.selectedBook, props.selectedChapter]);

  // useEffect(() => {
  //   fetch(
  //     `https://bible.fhl.net/json/qb.php?chineses=${chineses}&chap=${chap}&version=${version}&strong=${strong}&gb=${gb}`
  //   )
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setItems(result);
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, [props.selectedBook, props.selectedChapter]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    // console.log(items.record[0].title);
    const verses = items.record;
    // console.table(verses);
    return (
      <div className="bg-[#F2AA7E]">
        <h1 className="text-xl font-bold">列出聖經經文</h1>
        <h2 className="text-left font-bold text-3xl bg-[#FACFAD]">
          {items.record[0].chineses} {items.record[0].engs}
          {items.record[0].chap}
        </h2>
        <GenerateVerse verses={items.record} />
      </div>
    );

    // return JSON.stringify(items);
  }
};

const GenerateVerse = (data) => {
  // console.log(data.verses);
  return data.verses.map((verse) => (
    <div
      key={verse.sec}
      className="text-left bg-[#FBD7B1] px-4 py-2 transition duration-300 ease-in-out hover:bg-[#F8BB8B] "
    >
      {verse.sec} {verse.bible_text}
    </div>
  ));
};

export default GetVerse;
