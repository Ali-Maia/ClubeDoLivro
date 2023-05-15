import * as S from "./styles"

type LoginInputProps = {
  text: string;
}

const LoginInput = ({text}: LoginInputProps) =>{
  return(
    <S.InputForm placeholder={text} />
  );
}
export default LoginInput;