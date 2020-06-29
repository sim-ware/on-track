import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //
  const [page] = useState(1);
  // const [page, setPage] = useState(1);
  //
  const [bookList, setBookList] = useState();

  useEffect(() => {
    fetch("http://nyx.vima.ekt.gr:3000/api/books", {
      method: "POST",
      body: JSON.stringify({
        page: 1,
        itemsPerPage: 20,
        filters: [],
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        setBookList(response);
      })
      .catch((error) => console.log(error));
  }, [page]);

  console.log("*bookList", bookList);

  return (
    <div>
      <Header />
      <Body bookList={bookList ? bookList : null} />
    </div>
  );
}

export default App;
