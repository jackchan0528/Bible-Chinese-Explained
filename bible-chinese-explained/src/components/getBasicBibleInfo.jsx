import React, { Component, useState, useEffect } from "react";

const GetBasicBibleInfo = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://bible.fhl.net/json/ab.php")
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
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    // console.log(items.record[0].title);
    const result = items.record;
    // console.table(result);
    return (
      <div className="bg-[#F2AA7E]">
        <h1 className="text-xl font-bold">列出聖經基本資料</h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-10">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full ">
                  <thead className="border-b bg-[#F8BD7F]">
                    <tr>
                      <TableHeader />
                    </tr>
                  </thead>
                  <tbody>
                    <TableBody result={result} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    // return JSON.stringify(items);
  }
};

const TableHeader = () => {
  const th_className =
    "text-sm font-medium text-gray-900 px-3 py-3 text-center";
  const headerArray = [
    "book",
    "cname",
    "proc",
    "strong",
    "ntonly",
    "candownload",
    "otonly",
    "version",
  ];
  return headerArray.map((header) => (
    <th key={header} scope="col" className={th_className}>
      {header}
    </th>
  ));
};

const TableBody = (data) => {
  const td_className =
    "text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap text-center";
  return data.result.map(
    ({ book, cname, proc, strong, ntonly, candownload, otonly, version }) => (
      <tr
        key={book}
        className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
      >
        <td className={td_className}>{book}</td>
        <td className={td_className}>{cname}</td>
        <td className={td_className}>{proc}</td>
        <td className={td_className}>{strong}</td>
        <td className={td_className}>{ntonly}</td>
        <td className={td_className}>{candownload}</td>
        <td className={td_className}>{otonly}</td>
        <td className={td_className}>{version}</td>
      </tr>
    )
  );
};

export default GetBasicBibleInfo;
