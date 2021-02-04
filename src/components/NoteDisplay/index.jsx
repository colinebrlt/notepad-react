import React from 'react';
import Showdown from 'showdown';

const NoteDisplay = ({ title, content }) => {
  const converter = new Showdown.Converter();
  
  const contentDisplay = converter.makeHtml(content);
  const createMarkup = () => ({ __html: contentDisplay });
 
  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};

export default NoteDisplay;
