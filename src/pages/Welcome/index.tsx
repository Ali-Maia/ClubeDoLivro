import * as S from "./styles";
import ButtonNav from "../../Components/ButtonNav";
import book from "../../img/book.png";
import welcome from "../../img/welcome.png";
import arrow from "../../img/arrow.png";
const Welcome = () => {
  //Componente
  //TS --> Lógica

  return (
    // TSX
    <S.Container>
      <S.ContainerBook>
        <S.BookImg source={book} />
      </S.ContainerBook>
      <S.WelcomeImg source={welcome} />
      <S.ContainerText>
        <S.Title>Clube do Livro</S.Title>
        <S.SubTitle>
          Conecte-se com pessoas de diversos lugares do mundo.
        </S.SubTitle>
      </S.ContainerText>

      <ButtonNav text={"Quero Participar"} icon={arrow} gap={30} />
      {/* <S.Button>
        <S.Text>Quero Participar</S.Text>
        <S.ArrowImg source={arrow} />
      </S.Button> */}
    </S.Container>
  );
};
export default Welcome;
