import React from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header/Header";
import Leftbar from "./components/LeftBar/Leftbar";
import MainWrite from "./components/MainWrite/MainWrite";
import { MainColor } from "./theme/theme";

const TotalContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const RightContainer = styled.div`
  flex: 3;
  background-color: ${MainColor.Bg2};
  display: flex;
  flex-direction: column;
`;

const App: React.FC = () => {
  return (
    <TotalContainer>
      <Leftbar />
      <RightContainer>
        <Header />
        <MainWrite />
      </RightContainer>
    </TotalContainer>
  );
};

export default App;
