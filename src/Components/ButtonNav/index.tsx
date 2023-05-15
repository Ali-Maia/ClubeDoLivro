import { ImageSourcePropType } from "react-native/types";
import * as S from "./style";
type ButtonNavProps = {
  text: string;
  // proprieda opcional
  height?: number;
  width?: number;
  gap?: number;
  icon?: ImageSourcePropType;
};

const ButtonNav = ({
  text,
  icon,
  width = 280,
  height = 52,
  gap = 0,
}: ButtonNavProps) => {
  return (
    <S.Button width={width} height={height} gap={gap}>
      <S.Text>{text}</S.Text>
      <S.Icon source={icon} />
    </S.Button>
  );
};

export default ButtonNav;
