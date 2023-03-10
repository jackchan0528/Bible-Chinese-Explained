import React, { Component, useState, useEffect } from "react";

const Testing = (props) => {
  console.log("entering testing");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // chineses, chap, sec, version, strong, gb
  // const chineses = props.selectedBook;
  // const chap = props.selectedChapter;
  // const version = props.params.version;
  // const strong = props.params.strong;
  // const gb = props.params.gb;
  const version = "nstrunv";
  const strong = 1;
  const gb = 0;

  // console.log(
  //   `https://bible.fhl.net/json/qb.php?chineses=${chineses}&chap=${chap}&sec=${sec}&version=${version}&strong=${strong}&gb=${gb}`
  // );

  const fetchExplanationData = () => {
    fetch(
      `https://bible.fhl.net/json/sc.php?book=1,2,3&engs=Rom&chap=1&sec=1&gb=0`
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
    fetchExplanationData();
  }, [props.selectedBook, props.selectedChapter]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    console.log(items.record[0].com_text);
    const verses = items.record;
    // console.table(verses);

    return (
      <div className="bg-[#FDE8D8]">
        <h1 className="text-xl font-bold">列出註釋</h1>

        <GenerateExplanation verses={items.record[0].com_text} />
      </div>
    );
  }
};

const GenerateExplanation = (data) => {
  // console.log(data.verses);
  return (
    <div className="text-left text-l whitespace-pre-line">{data.verses}</div>
  );
};

export default Testing;
