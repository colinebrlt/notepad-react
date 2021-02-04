import React from "react";
import { Row } from "react-bootstrap";
import "./index.scss";

const SaveButton = (props) => {
  const { localStorage } = window;

  const handleSave = () => {
    const blocNote = { title: props.title, content: props.content };
    localStorage.setItem('blocNote', JSON.stringify(blocNote));
    console.log(localStorage.getItem('blocNote'));
  };

  return (
    <Row>
      <button type="button" className="button" onClick={handleSave}>
        Sauvegarder
      </button>
    </Row>
  );
};

export default SaveButton;
