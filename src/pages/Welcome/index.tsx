import * as S from "./styles";
import heart from "../../img/heart.png";
import welcome from "../../img/welcome.png";
import arrow from "../../img/arrow.png";
const Welcome = () => {
  //Componente
  //TS --> Lógica

  return (
    // TSX
    <S.Container>
      <S.ContainerBook>
        <S.BookImg source={heart} />
      </S.ContainerBook>
      <S.WelcomeImg source={welcome} />
      <S.Title>Clube do Livro</S.Title>
      <S.SubTitle>
        Conecte-se com pessoas de diversos lugares do mundo.
      </S.SubTitle>
      <S.Button>
        <S.Text>Quero Participar</S.Text>
        <S.ArrowImg source={arrow} />
      </S.Button>
    </S.Container>
  );
};
export default Welcome;
