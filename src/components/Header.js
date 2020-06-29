import React from "react";
import Pagination from "react-bootstrap/Pagination";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";

function Header() {
  const clicker = (number) => {
    console.log("*number", number);
  };

  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        onClick={() => clicker(number)}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
    );
  }

  const paginationBasic = (
    <div style={{ paddingLeft: "200vh", marginTop: "15px" }}>
      <Pagination>{items}</Pagination>
    </div>
  );

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">On Track Book List</Navbar.Brand>
      {paginationBasic}
    </Navbar>
  );
}

export default Header;
