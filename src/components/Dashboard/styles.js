import styled from "styled-components";

export const DashboardStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: lightcyan;
  position: relative;
  h2 {
    position: absolute;
    left: 20px;
    top: 0;
  }
  img {
    width: 80%;
    margin: 40px auto;
  }
  button {
    position: absolute;
    right: 20px;
    bottom: 0;
    width: 38%;
  }
  @media only screen and (min-width: 600px) {
    img {
      width: 100%;
    }
  }
`;
