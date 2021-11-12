import { StyledInput } from "./styles";

const Input = ({ type, placeholder, register, value }) => {
  return (
    <>
      <StyledInput>
        <input type={type} placeholder={placeholder} {...register(value)} />
      </StyledInput>
    </>
  );
};
export default Input;
