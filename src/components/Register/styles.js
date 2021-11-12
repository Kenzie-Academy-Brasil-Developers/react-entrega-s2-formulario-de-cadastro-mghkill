import styled from "styled-components";

export const FormStyled = styled.section`
  display: flex;
  justify-content: center;
  width: 70%;
  background-color: rgb(1 4 13 / 20%);
  margin: 0 auto;
  padding: 1.5rem;
  height: 50vh;
  width: 65vw;
  border-radius: 6px;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 60vw;
    @media only screen and (min-width: 600px) {
      width: 400px;
    }
    span {
      height: 25px;
      padding: 5px;
      font-size: smaller;
      color: rgb(201 28 76 / 80%);
    }
  }
  @media only screen and (min-width: 600px) {
    width: 500px;
  }
`;
