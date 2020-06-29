import React from "react";
import Pagination from "react-bootstrap/Pagination";
import "../App.css";

const clicker = (number, setPage) => {
  setPage(number);
};

export default function Paginator(props) {
  const { page, setPage } = props;
  let items = [];

  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        onClick={() => clicker(number, setPage)}
        key={number}
        active={number === page}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div style={{ paddingLeft: "100vh", marginTop: "15px" }}>
      <Pagination>{items}</Pagination>
    </div>
  );
}
