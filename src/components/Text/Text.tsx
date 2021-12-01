import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";

const TextContainer = styled.div`
  width: 100%;
  .text {
    width: 100%;
    background-color: transparent;
    padding: 1em;
    resize: none;
    border: none;
    ::placeholder {
      transform: translateX(0.5em);
    }
  }
`;

const Text = () => {
  const [texting, setTexting] = useState("");

  return (
    <TextContainer>
      <TextareaAutosize
        autoComplete="off"
        name="text"
        onChange={(e) => setTexting(e.target.value)}
        value={texting}
        placeholder="Type your text here..."
        autoFocus
        className="text"
      ></TextareaAutosize>
    </TextContainer>
  );
};

export default Text;
