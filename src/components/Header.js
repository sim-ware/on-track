import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Paginator from "./Paginator";
import SearchBar from "./SearchBar";
import "../App.css";

export default function Header(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">On Track Book List</Navbar.Brand>
      <SearchBar />
      <Paginator page={props.page} setPage={props.setPage} />
    </Navbar>
  );
}
