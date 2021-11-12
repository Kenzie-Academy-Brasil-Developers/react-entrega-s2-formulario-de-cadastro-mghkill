import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormStyled } from "./styles";

const Form = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatório")
      .matches(
        /^.(?=.{8,})((?=.[!@#$%^&()\-_=+{};:,<.>]){1})(?=.\d)((?=.[a-z]){1})((?=.[A-Z]){1}).*$/,
        "Maiúsculas, minúsculas, especiais %$#@%, 8 caracters +"
      ),
    confirm_password: yup
      .string()
      .required("Repetir senha obrigatório")
      .oneOf([yup.ref("password")], "Senhas não são iguais!"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleRegister = (data) => {
    console.log(data);
  };
  return (
    <FormStyled>
      <form onSubmit={handleSubmit(handleRegister)}>
        <input type="text" {...register("name")} />
        <span>{errors.name?.message}</span>

        <input type="text" {...register("email")} />
        <span>{errors.email?.message}</span>
        <input type="text" {...register("password")} />
        <span>{errors.password?.message}</span>
        <input type="text" {...register("confirm_password")} />
        <span>{errors.confirm_password?.message}</span>
        <button type="submit">Enviar</button>
      </form>
    </FormStyled>
  );
};
export default Form;
