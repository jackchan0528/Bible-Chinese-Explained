import React, { Component, useState, useEffect } from "react";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";

const GetExplanation = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("received location:", location);
  // console.log("received props:", props);
  // const props = queryString.parse(props.location.search);
  // console.log(tp);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const version = "nstrunv";
  const strong = 1;
  const gb = 0;

  const book = location.state.selectedVerse.engs;
  const chapter = location.state.selectedChapter;
  const verse = location.state.selectedVerse.sec;

  console.log("called", book, chapter, verse);

  const fetchExplanationData = () => {
    // console.log(
    //   `https://bible.fhl.net/json/sc.php?engs=${book}&chap=${chapter}&sec=${verse}&gb=0`
    // );
    fetch(
      `https://bible.fhl.net/json/sc.php?engs=${book}&chap=${chapter}&sec=${verse}&gb=0`
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
  }, [
    location.state.selectedBook,
    location.state.selectedChapter,
    location.state.selectedVerse.sec,
  ]);

  const GenerateExplanation = (data) => {
    var output = JSON.stringify(data.explanations);
    output = output.slice(1, -1);
    output = output.replaceAll(/\s+/g, " ");
    output = output.replaceAll("\\r\\n", "\n");
    output = output.replaceAll("| ◎", "\t\t◎");
    output = output.replaceAll("●", "\t\t●");
    output = output.replaceAll("◎", "\t\t◎");
    output = output.replaceAll("|、", "、");
    output = output.replaceAll("|，", "，");
    output = output.replaceAll("|）", "）");
    output = output.replaceAll("|", " ");
    console.log("original: ", data.explanations.replaceAll(/\s+/g, " "));
    console.log("after: ", output);
    // var output = data.explanations;
    // fetchExplanationData();
    return <div className="whitespace-pre-wrap">{output}</div>;
  };

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
        <h1 className="text-center font-bold text-2xl text-middle px-2 py-2">
          列出註釋
        </h1>
        <h2 className="text-left font-bold text-xl bg-[#FACFAD] px-2 py-2">
          《{book}》 第{chapter}章 第{verse}節
        </h2>
        <GenerateExplanation explanations={items.record[0].com_text} />
        <div className="grid grid-flow-col auto-rows-max inline-flex h-auto px-2 py-2">
          <button
            className="bg-gray-400 hover:bg-[#F09E6A] text-white font-bold py-2 px-4 rounded-full"
            onClick={() => navigate(-1)}
          >
            返回經文
          </button>
        </div>
      </div>
    );
  }
};

export default GetExplanation;
