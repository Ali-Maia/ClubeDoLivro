import { ImageSourcePropType } from "react-native/types";
import * as S from "./style";
type ButtonNavProps = {
  text: string;
  // icon: ImageSourcePropType;
}


const ButtonNav = ({text}: ButtonNavProps) => {
  return <S.Button>
    <S.Text>{text}</S.Text>
    {/* <S.Icon source={icon}/> */}

  </S.Button>;
};

export default ButtonNav;
