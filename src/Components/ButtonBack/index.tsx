import { ImageSourcePropType,TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type ButtonBackProps = {
  icon: ImageSourcePropType;
} & TouchableOpacityProps;
const ButtonBack = ({icon,...rest}: ButtonBackProps) => {
  return (
    <S.Button {...rest}>
      <S.Icon source={icon} />
    </S.Button>
  );
};
export default ButtonBack;
