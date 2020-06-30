import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App(props) {
  const [page, setPage] = useState(parseInt(props.match.params.page));
  const [filters, setFilters] = useState([]);
  const [bookList, setBookList] = useState();

  useEffect(() => {
    fetch("http://nyx.vima.ekt.gr:3000/api/books", {
      method: "POST",
      body: JSON.stringify({
        page,
        itemsPerPage: 20,
        filters,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        setBookList(response);
      })
      .catch((error) => console.log(error));
  }, [page, filters]);

  return (
    <>
      <Header
        page={page}
        setPage={setPage}
        setFilters={setFilters}
        history={props.history}
      />
      <Body bookList={bookList ? bookList.books : null} />
    </>
  );
}
