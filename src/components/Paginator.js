import React from "react";
import Pagination from "react-bootstrap/Pagination";

const styles = {
  pagination: {
    paddingLeft: "650px",
    marginTop: "17px",
  },
};

const clicker = (number, setPage, history) => {
  setPage(number);
  history.push(`/${number}`);
};

export default function Paginator(props) {
  const { page, setPage, history } = props;
  let items = [];

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

  return <Pagination style={styles.pagination}>{items}</Pagination>;
}
