import styled from "styled-components";

export const SectionStyled = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin: 0 auto;
  padding: 1.5rem;
  min-height: 50vh;
  width: 65vw;
  border-radius: 6px;

  h1 {
    color: lightcyan;
    text-align: center;
  }

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
