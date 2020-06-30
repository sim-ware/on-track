import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Paginator from "./Paginator";
import SearchBar from "./SearchBar";

const styles = {
  headerItems: {
    display: "inline-flex",
  },
};

export default function Header(props) {
  const { page, history, setPage, setFilters } = props;

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">On Track Book List</Navbar.Brand>
      <div style={styles.headerItems}>
        <SearchBar setFilters={setFilters} />
        <Paginator page={page} setPage={setPage} history={history} />
      </div>
    </Navbar>
  );
}
