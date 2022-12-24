import React, { Component } from "react";

const HomePage = () => {
  return (
    <div className="bg-[#F2AA7E]">
      <h1 className="text-xl font-bold">聖經App</h1>
      {/* <h2 className="text-left font-bold text-3xl bg-[#FACFAD]">Hi</h2> */}
      <div className="flex-col w-1/2 px-2 py-2">
        <label
          htmlFor="countries"
          className=" px-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-3 left-0"
        >
          請選擇中文經卷
        </label>
        <select
          id="countries"
          //   ref={(input) => (this.menu = input)}
          defaultValue={"DEFAULT"}
          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-2 py-2"
        >
          <option value="DEFAULT" disabled>
            請選擇
          </option>
          <GetBookList />
          {/* <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option> */}
        </select>
      </div>
    </div>
  );
};

const GetBookList = () => {
  const books = [
    { shortName: "創", longName: "創世記" },
    { shortName: "出", longName: "出埃及記" },
    { shortName: "利", longName: "利未記" },
    { shortName: "民", longName: "民數記" },
    { shortName: "申", longName: "申命記" },
    { shortName: "書", longName: "約書亞記" },
    { shortName: "士", longName: "士師記" },
    { shortName: "得", longName: "路得記" },
    { shortName: "撒上", longName: "撒母耳記上" },
    { shortName: "撒下", longName: "撒母耳記下" },
    { shortName: "王上", longName: "列王紀上" },
    { shortName: "王下", longName: "列王紀下" },
    { shortName: "代上", longName: "歷代志上" },
    { shortName: "代下", longName: "歷代志下" },
    { shortName: "拉", longName: "以斯拉記" },
    { shortName: "尼", longName: "尼希米記" },
    { shortName: "斯", longName: "以斯帖記" },
    { shortName: "伯", longName: "約伯記" },
    { shortName: "詩", longName: "詩篇" },
    { shortName: "箴", longName: "箴言" },
    { shortName: "傳", longName: "傳道書" },
    { shortName: "歌", longName: "雅歌" },
    { shortName: "賽", longName: "以賽亞書" },
    { shortName: "耶", longName: "耶利米書" },
    { shortName: "哀", longName: "耶利米哀歌" },
    { shortName: "結", longName: "以西結書" },
    { shortName: "但", longName: "但以理書" },
    { shortName: "何", longName: "何西阿書" },
    { shortName: "珥", longName: "約珥書" },
    { shortName: "摩", longName: "阿摩司書" },
    { shortName: "俄", longName: "俄巴底亞書" },
    { shortName: "拿", longName: "約拿書" },
    { shortName: "彌", longName: "彌迦書" },
    { shortName: "鴻", longName: "那鴻書" },
    { shortName: "哈", longName: "哈巴谷書" },
    { shortName: "番", longName: "西番雅書" },
    { shortName: "該", longName: "哈該書" },
    { shortName: "亞", longName: "撒迦利亞書" },
    { shortName: "瑪", longName: "瑪拉基書" },
    { shortName: "太", longName: "馬太福音" },
    { shortName: "可", longName: "馬可福音" },
    { shortName: "路", longName: "路加福音" },
    { shortName: "約", longName: "約翰福音" },
    { shortName: "徒", longName: "使徒行傳" },
    { shortName: "羅", longName: "羅馬書" },
    { shortName: "林前", longName: "哥林多前書" },
    { shortName: "林後", longName: "哥林多後書" },
    { shortName: "加", longName: "加拉太書" },
    { shortName: "弗", longName: "以弗所書" },
    { shortName: "腓", longName: "腓立比書" },
    { shortName: "西", longName: "歌羅西書" },
    { shortName: "帖前", longName: "帖撒羅尼迦前書" },
    { shortName: "帖後", longName: "帖撒羅尼迦後書" },
    { shortName: "提前", longName: "提摩太前書" },
    { shortName: "提後", longName: "提摩太後書" },
    { shortName: "多", longName: "提多書" },
    { shortName: "門", longName: "腓利門書" },
    { shortName: "來", longName: "希伯來書" },
    { shortName: "雅", longName: "雅各書" },
    { shortName: "彼前", longName: "彼得前書" },
    { shortName: "彼後", longName: "彼得後書" },
    { shortName: "約一", longName: "約翰一書" },
    { shortName: "約二", longName: "約翰二書" },
    { shortName: "約三", longName: "約翰三書" },
    { shortName: "猶", longName: "猶大書" },
    { shortName: "啟", longName: "啟示錄" },
  ];
  return books.map((book) => (
    <option key={book.shortName} value={book.shortName}>
      {book.longName}
    </option>
  ));
};

export default HomePage;
