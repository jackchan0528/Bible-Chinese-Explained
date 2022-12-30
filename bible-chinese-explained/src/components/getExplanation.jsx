import React, { Component, useState, useEffect } from "react";

const GetExplanation = (props) => {
  console.log("hi");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const version = "nstrunv";
  const strong = 1;
  const gb = 0;

  const book = props.book;
  const chapter = props.chapter;
  const verse = props.verse;

  console.log("called", book, chapter, verse);

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
  }, [props.book, props.chapter]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    // console.log(items.record[0].com_text);
    // console.table(verses);
    console.log("testing here!");

    return (
      <div className="bg-[#FDE8D8]">
        <h1 className="text-xl font-bold">列出註釋</h1>

        <GenerateExplanation explanations={items.record[0].com_text} />
      </div>
    );
  }
};

const GenerateExplanation = (data) => {
  console.log(data.verses);
  return (
    <div className="text-left text-l whitespace-pre-wrap">
      {data.explanations}
    </div>
  );
};

export default GetExplanation;
