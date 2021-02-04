import { useState, useEffect } from "react";
import SaveButton from "components/SaveButton";
import NoteDisplay from "components/NoteDisplay";
import { Row, Col } from "react-bootstrap";
import "./index.scss";

const MarkdownInput = () => {
  useEffect(() => {
    const localStorageLength = localStorage.length;
    if (localStorageLength > 0) {
      const storageContent = localStorage.getItem(localStorage.key(0));
      const convertedNote = JSON.parse(storageContent);
      setNote(convertedNote);
    }
  }, []);

  const [note, setNote] = useState(localStorage.getItem('blocNote') || {title: "", content: ""});

  useEffect(() => {
    const blocNote = { title: note.title, content: note.content };
    localStorage.setItem('blocNote', JSON.stringify(blocNote));
  }, [note]);

  return (
    <Col>
      <NoteDisplay title={note.title} content={note.content} /> 
      <Row>
        <input
          placeholder="Mon titre"
          className="textarea-section"
          value={note.title}
          onChange={(e) => setNote({title: e.target.value, content: note.content})}
        />
      </Row>
      <Row>
        <textarea
          placeholder="Mon contenu"
          className="textarea-section"
          value={note.content}
          onChange={(e) => setNote({title: note.title, content: e.target.value})}
          rows="9"
        />
      </Row>
      <span>La sauvegarde est automatique, mais tu peux cliquer si tu veux !</span>
      <SaveButton title={note.title} content={note.content} />
    </Col>
  );
};

export default MarkdownInput;
