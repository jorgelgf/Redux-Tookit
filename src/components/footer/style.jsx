import styled from "styled-components";
import themes from "../../themes";

export const DivFooter = styled.footer`
  width: 100%;
  height: 50px;
  background-color: ${themes.colorPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${themes.colorSecondary};
  font-family: ${themes.font};
  font-weight: 700;
  font-size: 30px;

  //posicionado fixado sempre no footer
  position: fixed;
  bottom: 0;
  left: 0;
`;
