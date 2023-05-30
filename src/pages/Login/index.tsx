import * as S from "./styles";
import ButtonNav from "../../Components/ButtonNav";
import LoginInput from "../../Components/LoginInput/indes";
import login from "../../img/login.png";
const Login = ({ navigation }: any) => {
  return (
    <S.Container>
      <S.BookContainer>
        <S.LoginImg source={login} />
      </S.BookContainer>
      <S.FormContainer>
        <S.ChoiceFormContainer>
          <ButtonNav text="Login" width={90} height={40} />
          <ButtonNav text="Cadastro" width={90} height={40} />
        </S.ChoiceFormContainer>
        <LoginInput text="Email" />
        <LoginInput text="Senha" />
      </S.FormContainer>
      <ButtonNav
        text={"Entrar"}
        onPress={() => navigation.navigate("Welcome")}
      />
    </S.Container>
  );
};

export default Login;
