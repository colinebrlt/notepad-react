import React from 'react';
import { Row } from "react-bootstrap";
import "./index.scss";
import OneNote from '../OneNote';

const NotesList = () => {

  const getNotes = (defaultValue, key) => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? [JSON.parse(storedValue)] : defaultValue;
  };

  const notesList = getNotes([], 'blocNote');
  
  return (
    <div>
      <Row>
        <button type="button" className="button">
          Ajouter une note
        </button>
      </Row>
      <Row>
        <div>
          {notesList && notesList.map(({ 
            title, content,
          }) => <OneNote title={title} content={content} key={title} />)}
        </div>
      </Row>
    </div>
  );
};

export default NotesList;
