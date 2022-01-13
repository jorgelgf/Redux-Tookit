import styled from "styled-components";
import themes from "../../themes";

export const DivFull = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${themes.colorPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${themes.colorSecondary};
  font-family: ${themes.font};
  font-weight: 700;
  font-size: 30px;
  @media (max-width: 450px) {
    font-size: 18px;
  }
`;
