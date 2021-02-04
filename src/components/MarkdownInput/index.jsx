import { useState, useEffect } from "react";
import SaveButton from "components/SaveButton";
import NoteDisplay from "components/NoteDisplay";
import { Row, Col } from "react-bootstrap";
import "./index.scss";

const MarkdownInput = () => {
  const useStateLocalStorage = (key) => {
    const [element, setElement] = useState(
      localStorage.getItem(key) || ""
    );
    useEffect(() => {
      localStorage.setItem(key, element);
    }, [key, element]);

    return [element, setElement];
  };

  const [title, setTitle] = useStateLocalStorage("title");
  const [content, setContent] = useStateLocalStorage("content");

  return (
    <Col>
      <NoteDisplay title={title} content={content} /> 
      <Row>
        <input
          placeholder="Mon titre"
          className="textarea-section"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Row>
      <Row>
        <textarea
          placeholder="Mon contenu"
          className="textarea-section"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="9"
        />
      </Row>
      <SaveButton title={title} content={content} />
    </Col>
  );
};

export default MarkdownInput;
