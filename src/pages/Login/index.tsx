import * as S from "./styles";
import ButtonNav from "../../Components/ButtonNav";
import LoginInput from "../../Components/LoginInput/indes";
import login from "../../img/login.png";
import colors from "../../utils/colors";
const Login = ({ navigation }: any) => {
  return (
    
    <S.Container enabled>
      <S.BookContainer>
        <S.LoginImg source={login} />
      </S.BookContainer>
      <S.FormContainer>
        <S.ChoiceFormContainer >
          <ButtonNav text="Login" width={90} height={40} />
          <ButtonNav text="Cadastro" textColor={colors.primary} backgroundColor={colors.background} width={90} height={40} />
        </S.ChoiceFormContainer>
        <LoginInput text="Email" />
        <LoginInput text="Senha" senha={true}/>
        <ButtonNav
        text={"Entrar"}
        onPress={() => navigation.navigate("Welcome")}
      />
      </S.FormContainer>
      
    </S.Container>
  );
};

export default Login;
