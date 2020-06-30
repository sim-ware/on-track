import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const styles = {
  searchTermInput: {
    marginTop: "20px",
    marginLeft: "50px",
  },
  submitButton: {
    marginTop: "17px",
    marginLeft: "5px",
  },
};

const applyFilters = (searchTerm, setFilters) => {
  setFilters([{ type: "all", values: [searchTerm] }]);
};

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Form.Group style={{ display: "flex" }}>
      <Form.Control
        style={styles.searchTermInput}
        size="sm"
        type="text"
        onChange={handleChange}
        placeholder="Search..."
      />
      <Button
        style={styles.submitButton}
        variant="primary"
        type="submit"
        onClick={() => applyFilters(searchTerm, props.setFilters)}
      >
        Search
      </Button>
    </Form.Group>
  );
}
