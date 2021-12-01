import React from "react";
import styled from "styled-components";
import { MainColor, MainSize } from "../../theme/theme";
import FirstTitle from "../FirstTitle/FirstTitle";
import Text from "../Text/Text";

const MainWriteTotalContainer = styled.div`
  height: 100%;
  background-color: #f3f3f3;
  padding: 5em 8em 0 8em;
`;

const MainWrite = () => {
  return (
    <MainWriteTotalContainer>
      <Text />
    </MainWriteTotalContainer>
  );
};

export default MainWrite;
