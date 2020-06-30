import React from "react";
import Pagination from "react-bootstrap/Pagination";
import "../App.css";

const clicker = (number, setPage, history) => {
  setPage(number);
  history.push(`/${number}`);
};

export default function Paginator(props) {
  const { page, setPage, history } = props;
  let items = [];

  //
  // console.log("*page", typeof page);
  //

  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        onClick={() => clicker(number, setPage, history)}
        key={number}
        active={number === page}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Pagination style={{ paddingLeft: "100vh", marginTop: "15px" }}>
      {items}
    </Pagination>
  );
}
