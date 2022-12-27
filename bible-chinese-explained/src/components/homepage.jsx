import React, { Component, useEffect } from "react";

const HomePage = (props) => {
  return (
    <div className="bg-[#F2AA7E]">
      <h1 className="text-xl font-bold">聖經App</h1>
      {/* <h2 className="text-left font-bold text-3xl bg-[#FACFAD]">Hi</h2> */}
      <div className="flex">
        <div className="flex-col w-1/2 px-2 py-2">
          <label
            htmlFor="books"
            className=" px-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-3 left-0"
          >
            請選擇中文經卷
          </label>
          <select
            id="books"
            //   ref={(input) => (this.menu = input)}
            value={props.selectedBook}
            onChange={(e) => {
              props.onSelectedBook(e.target.value);
              // To prevent accessing some books without that chapter number, we should return chap to 1
              props.onSelectedChapter(1);
            }}
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-2 py-2"
          >
            <option value="" disabled={true}>
              請選擇經卷
            </option>
            <GetBookList />
          </select>
        </div>
        <div className="flex-col w-1/2 px-2 py-2">
          <label
            htmlFor="chapters"
            className=" px-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-3 left-0"
          >
            請選擇第幾章
          </label>
          <select
            id="chapters"
            //   ref={(input) => (this.menu = input)}
            value={props.selectedChapter}
            onChange={(e) => props.onSelectedChapter(e.target.value)}
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-2 py-2"
          >
            <option value="" disabled={true}>
              請選擇
            </option>
            <GetNumberOfChaptersList value={props.selectedBook} />
            {/* <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option> */}
          </select>
        </div>
      </div>
    </div>
  );
};

const GetBookList = () => {
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
  return books.map((book) => (
    <option key={book.shortName} value={book.shortName}>
      {book.longName}
    </option>
  ));
};

const GetNumberOfChaptersList = (value) => {
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
  // var array = Array.from({ length: numberOfChapters }, (_, i) => i + 1);
  // var arrayChap = Array.from({ length: value.value }, (_, i) => i + 1);
  // console.log(arrayChap);
  // console.log(
  //   "Testing",
  //   books.filter((book) => book.shortName === value.value)
  // );
  // console.log("now printing value.value", value);

  if (value.value == "") {
    console.log(value.value, "is empty");
  } else {
    console.log(value.value, "is not empty");
  }

  var filteredNumberOfChapters =
    value.value !== ""
      ? books.filter((book) => book.shortName === value.value)[0]
          .numberOfChapters
      : 0;

  console.log("testing", filteredNumberOfChapters);

  var filteredNumberOfChaptersArray = Array.from(
    { length: filteredNumberOfChapters },
    (_, i) => i + 1
  );

  // console.log(
  //   "checking value",
  //   value.value,
  //   "checking book",
  //   books.filter((book) => book.shortName === value.value)
  // );

  return filteredNumberOfChaptersArray.map((chap) => (
    <option key={chap} value={chap}>
      第{chap}章
    </option>
  ));
};

export default HomePage;
