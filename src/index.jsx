import React from "react";
import ReactDOM from "react-dom";
import MarkdownInput from "components/MarkdownInput";
import NotesList from "components/NotesList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./main.scss";

const App = () => (
  <Container>
    <Row>
      <Col sm={3} className="left-column">
        <Row>
          <NotesList />
          <p></p>
        </Row>
      </Col>
      <Col sm={9} className="right-column">
        <MarkdownInput />
      </Col>
    </Row>
  </Container>
);

ReactDOM.render(<App />, document.getElementById("root"));
