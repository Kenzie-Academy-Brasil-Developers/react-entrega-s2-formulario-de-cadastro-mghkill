import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SectionStyled } from "./styles";
import { useHistory } from "react-router";
import Input from "../Input";
import Button from "../Button";

const Form = () => {
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Não é um email válido"),
    password: yup
      .string()
      .required("Senha obrigatório")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
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
    history.push("/dashboard");
  };

  return (
    <SectionStyled>
      <form onSubmit={handleSubmit(handleRegister)}>
        <Input
          type="text"
          placeholder={"Nome"}
          register={register}
          value="name"
        />
        <span>{errors.name?.message}</span>

        <Input
          type="text"
          placeholder={"E-mail"}
          register={register}
          value="email"
        />
        <span>{errors.email?.message}</span>

        <Input
          type="text"
          placeholder={"Senha"}
          register={register}
          value="password"
        />
        <span>{errors.password?.message}</span>

        <Input
          type="text"
          placeholder="Confirmar senha"
          register={register}
          value="confirm_password"
        />
        <span>{errors.confirm_password?.message}</span>
        <Button type={"submit"}>Enviar</Button>
      </form>
    </SectionStyled>
  );
};
export default Form;
