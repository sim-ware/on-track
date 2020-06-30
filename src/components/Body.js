import React from "react";

const styles = {
  body: {
    backgroundColor: "#1D7874",
    minHeight: "95vh",
  },
  listContainer: {
    paddingLeft: "50px",
    paddingTop: "10px",
  },
};

export default function Body(props) {
  return (
    <div style={styles.body}>
      <ul style={styles.listContainer}>
        {props.bookList
          ? props.bookList.map((book) => (
              <li>
                {book.id}: {book.book_title}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
