import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import "../App.css";

export default function Body(props) {
  return (
    <div className="Body">
      {props.bookList ? props.bookList.count : <LoadingSpinner />}
    </div>
  );
}
