import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import "../App.css";

function Body(props) {
  return (
    <div className="Body">
      {props.bookList ? props.bookList.count : <LoadingSpinner />}
    </div>
  );
}

export default Body;
