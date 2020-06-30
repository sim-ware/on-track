import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// https://react-bootstrap.github.io/getting-started/introduction/
export default function App(props) {
  const [page, setPage] = useState(parseInt(props.match.params.page));
  const [bookList, setBookList] = useState();

  useEffect(() => {
    fetch("http://nyx.vima.ekt.gr:3000/api/books", {
      method: "POST",
      body: JSON.stringify({
        page,
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

  // console.log("*props", props);
  // console.log("*props.match.params.page", props.match.params.page);
  // console.log("*page", page);

  return (
    <>
      <Header page={page} setPage={setPage} history={props.history} />
      <Body bookList={bookList ? bookList : null} />
    </>
  );
}
