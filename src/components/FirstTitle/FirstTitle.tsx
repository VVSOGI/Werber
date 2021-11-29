import React, { useRef, useState } from "react";
import styled from "styled-components";
import { MainColor } from "../../theme/theme";

const FirstTitleContainer = styled.div`
  display: block;
  width: 100%;
  font-size: 36px;
  padding: 0.3em 0.5em;
  color: ${MainColor.FontGrayColor};
  position: relative;
`;

const TextArea = styled.textarea``;

const TextInput = styled.input`
  /* display: none; */
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  outline: none;
  border: none;
  font-size: 36px;
  padding: 0.3em 0.5em;
  background-color: transparent;
  :hover {
    background-color: #ececec;
  }
`;

const FirstTitle = () => {
  const TextRef = useRef<HTMLInputElement | null>(null);
  const ResultRef = useRef<HTMLDivElement | null>(null);

  const TextRefClick = () => {
    if (TextRef.current) {
      TextRef.current.setAttribute("area-hidden", "true");
      console.dir(TextRef.current);
    }
  };

  return (
    <FirstTitleContainer>
      <TextInput
        placeholder="제목을 입력하세요."
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            TextRefClick();
          }
        }}
        ref={TextRef}
      />
    </FirstTitleContainer>
  );
};

export default FirstTitle;
