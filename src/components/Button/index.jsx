import { StyledButton } from "./styles";

const Button = ({ onclick, type, children }) => {
  return (
    <>
      <StyledButton onClick={onclick} type={type}>
        {children}
      </StyledButton>
    </>
  );
};
export default Button;
