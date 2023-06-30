import * as S from "./styles";
import CardCategory from "../../Components/CardCategory";
import ButtonBack  from "../../Components/ButtonBack";
import ButtonNav from "../../Components/ButtonNav";
import ghost from "../../img/ghost.png";
import heart from "../../img/heart.png";
import aventura from "../../img/aventura.png";
import biotech from "../../img/Biotech.png";
import blackCat from "../../img/blackCat.png";
import trust from "../../img/Trust.png";
import back from "../../img/Back.png"
import { useNavigation } from "@react-navigation/native";
const Category = () => {
  const navigation = useNavigation()
  return (
    <S.Container>
      <ButtonBack icon={back} onPress={() => navigation.goBack()}/>
      <S.Tittle>Selecione o seus gêneros favoritos:</S.Tittle>
      <S.CardContainer
        contentContainerStyle={{
          /* @ts-ignore */
          gap: 43,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <CardCategory icon={ghost} text={"terror"} />
        <CardCategory icon={heart} text={"romance"} />
        <CardCategory icon={aventura} text={"aventura"} />
        <CardCategory icon={biotech} text={"ficção"} />
        <CardCategory icon={blackCat} text={"suspense"} />
        <CardCategory icon={trust} text={"autoajuda"} />
      </S.CardContainer>

      <ButtonNav
        text={"Concluir"}
        onPress={() => navigation.navigate("Welcome")}
      />
    </S.Container>
  );
};
export default Category;
