import React from "react";
import { Row } from "react-bootstrap";
import "./index.scss";

const SaveButton = (props) => {
  const handleClick = () => {
    const note = { title: props.title, content: props.content };
    localStorage.setItem(props.title, JSON.stringify(note));
  };

  return (
    <Row>
      <button type="button" className="button" onClick={handleClick}>
        Sauvegarder
      </button>
    </Row>
  );
};

export default SaveButton;
