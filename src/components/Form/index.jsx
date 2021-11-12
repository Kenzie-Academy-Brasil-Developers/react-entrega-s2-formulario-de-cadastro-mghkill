import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SectionStyled } from "./styles";
import { useHistory } from "react-router";
import Input from "../Input";
import Button from "../Button";

const Form = ({ setAllowed }) => {
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "Apenas letras"),
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Não é um email válido"),
    password: yup
      .string()
      .required("Senha obrigatório")
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Maiúsculas, minúsculas, especiais %$#@%"
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
    setAllowed(true);
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
