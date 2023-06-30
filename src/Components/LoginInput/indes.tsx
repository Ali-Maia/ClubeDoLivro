import * as S from "./styles";

type LoginInputProps = {
  text: string;
  senha?: boolean;
};

const LoginInput = ({ text, senha = false }: LoginInputProps) => {
  return <S.InputForm placeholder={text} secureTextEntry={senha} />;
};
export default LoginInput;
