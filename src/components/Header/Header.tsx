import React from "react";
import styled from "styled-components";
import { MainColor, MainSize } from "../../theme/theme";

const HeaderTotalContainer = styled.div`
  min-height: ${MainSize.Height};
  background-color: ${MainColor.Bg3};
`;

const Header = () => {
  return <HeaderTotalContainer></HeaderTotalContainer>;
};

export default Header;
