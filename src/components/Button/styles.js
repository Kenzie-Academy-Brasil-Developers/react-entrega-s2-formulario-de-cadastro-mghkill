import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: lightcyan;
  background-color: #ff006e;
  cursor: pointer;
  height: 40px;
  border-radius: 8px;
  font-size: large;
  border: none;
  :hover {
    background-color: lightcyan;
    color: #ff006e;
    transition: 0.5s;
  }
`;
