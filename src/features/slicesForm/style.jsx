import styled from "styled-components";
import themes from "../../themes";

export const DivFull = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 240px;
  height: 40px;
  border-radius: 5px;
  font-size: 30px;
  font-family: ${themes.font};
  text-align: center;
  color: ${themes.colorPrimary};
  border: 0.1px solid ${themes.colorPrimary};
  @media (max-width: 450px) {
    font-size: 20px;
    width: 200px;
  }
`;

export const ValueForm = styled.p`
  font-size: 30px;
  font-family: "Courier New", Courier, monospace;
  color: ${themes.colorPrimary};
`;
