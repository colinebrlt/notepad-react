import React from "react";
import { Row } from "react-bootstrap";
import "./index.scss";

const SaveButton = (props) => {
  const handleSave = () => {
    const blocNote = { title: props.title, content: props.content };
    localStorage.setItem(props.title, JSON.stringify(blocNote));
    console.log("coucou");
    console.log(localStorage.getItem('blocNote'));
  };

  return (
    <Row>
      <button type="button" className="button" onClick={handleSave}>
        Ajouter une note
      </button>
    </Row>
  );
};

export default SaveButton;
