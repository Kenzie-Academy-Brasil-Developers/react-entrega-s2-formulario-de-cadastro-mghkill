import styled from "styled-components";

export const StyledInput = styled.div`
  height: 46px;
  padding: 5px;
  border-radius: 4px;
  background-color: lightcyan;
  border-bottom: 1px solid lightcyan;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    background-color: lightcyan;
    width: 100%;
    height: 90%;
    border: none;
    padding: 5px;
    :focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }
    ::placeholder {
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px lightcyan inset !important;
  }
`;
