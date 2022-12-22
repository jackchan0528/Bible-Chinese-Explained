import React, { Component, useState, useEffect } from "react";

const GetStatus = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://bible.fhl.net/json/abv.php?gb=0")
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
    return result.map((item) => (
      <table>
        <tbody>
          <tr key={item.book}>
            <td>{item.book}</td>
            <td>{item.cname}</td>
            <td>{item.proc}</td>
            <td>{item.strong}</td>
            <td>{item.ntonly}</td>
            <td>{item.candownload}</td>
            <td>{item.otonly}</td>
            <td>{item.version}</td>
          </tr>
        </tbody>
      </table>
    ));

    // return JSON.stringify(items);
  }
};

export default GetStatus;
