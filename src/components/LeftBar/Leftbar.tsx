import React from "react";
import styled from "styled-components";
import { MainColor, MainSize } from "../../theme/theme";

const LeftBarTotalContainer = styled.div`
  flex: 1;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const LeftBarTopContainer = styled.div`
  min-height: ${MainSize.Height};
  background-color: ${MainColor.Bg2};
`;

const LeftBarCenterContainer = styled.div`
  background-color: ${MainColor.Bg2};
  height: 100%;
`;

const LeftBarBottomContainer = styled.div`
  min-height: ${MainSize.Height};
  background-color: ${MainColor.Bg4};
`;

const Leftbar = () => {
  return (
    <LeftBarTotalContainer>
      <LeftBarTopContainer></LeftBarTopContainer>
      <LeftBarCenterContainer></LeftBarCenterContainer>
      <LeftBarBottomContainer></LeftBarBottomContainer>
    </LeftBarTotalContainer>
  );
};

export default Leftbar;
