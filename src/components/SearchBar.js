import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../App.css";

export default function SearchBar(props) {
  return (
    <Form.Group>
      <Form.Control size="sm" type="text" placeholder="Search..." />
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form.Group>
  );
}
