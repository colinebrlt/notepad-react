import React from "react";
import ReactHtmlParser from "react-html-parser";
import Showdown from 'showdown';

const Converter = ({ text }) => {
  const converter = new Showdown.Converter();
  const convertedText = converter.makeHtml(text);

  return <div>{ReactHtmlParser(convertedText)}</div>;
};

export default Converter;
