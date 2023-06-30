import { ImageSourcePropType } from "react-native/types";
import { TouchableOpacityProps } from "react-native";
import * as S from "./style";
type ButtonNavProps = {
  text: string;
  textColor?: string;
  backgroundColor?: string;
  // proprieda opcional
  height?: number;
  width?: number;
  gap?: number;
  icon?: ImageSourcePropType;
} & TouchableOpacityProps;

const ButtonNav = ({
  text,
  backgroundColor,
  textColor,
  icon,
  width = 280,
  height = 52,
  gap = 0,
  ...rest
}: ButtonNavProps) => {
  return (
    <S.Button width={width} height={height} gap={gap} backgroundColor={backgroundColor} {...rest}>
      <S.Text textColor={textColor}>{text}</S.Text>
      <S.Icon source={icon} />
    </S.Button>
  );
};

export default ButtonNav;
