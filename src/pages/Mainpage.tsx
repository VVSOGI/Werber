import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const MainLeftBox = styled.div`
  flex: 1;
  background-color: #702828;
  display: flex;
  flex-direction: column;
`;

const MainLeftTop = styled.div`
  height: 4rem;
  background-color: #f0f0f0;
`;

const MainLeftCenter = styled.div`
  flex: 12;
  background-color: #e2e2e2;
`;

const MainLeftBottom = styled.div`
  flex: 1;
  background-color: #f0f0f0;
`;

const MainRightBox = styled.div`
  flex: 4;
  background-color: #2c5c8a;
  display: flex;
  flex-direction: column;
`;

const MainRightTop = styled.div`
  height: 4rem;
  background-color: #f0f0f0;
  display: flex;
`;

const RightTopMenuBox = styled.div`
  flex: 1;
  border: 1px solid black;
  border-right: none;
`;

const MainRightCenter = styled.div`
  background-color: #ffffff;
  flex: 1;
  padding: 10em;
  padding-left: 6em;
  padding-right: 10em;
  position: relative;
`;

const TextHead = styled.input`
  width: 100%;
  font-size: 48px;
  border: none;
`;

const Mainpage: React.FC = () => {
  return (
    <MainContainer>
      <MainLeftBox>
        <MainLeftTop></MainLeftTop>
        <MainLeftCenter></MainLeftCenter>
        <MainLeftBottom></MainLeftBottom>
      </MainLeftBox>
      <MainRightBox>
        <MainRightTop>
          <RightTopMenuBox></RightTopMenuBox>
          <RightTopMenuBox></RightTopMenuBox>
          <RightTopMenuBox></RightTopMenuBox>
          <RightTopMenuBox></RightTopMenuBox>
        </MainRightTop>
        <MainRightCenter>
          <TextHead placeholder="제목"></TextHead>
        </MainRightCenter>
      </MainRightBox>
    </MainContainer>
  );
};

export default Mainpage;
