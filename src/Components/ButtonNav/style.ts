import styled from "styled-components/native";
import colors from "../../utils/colors";
import { TouchableOpacityProps } from "react-native";
type ButtonProps = {
  backgroundColor?: string;
  width?: number;
  gap?: number;
  height?: number;
} & TouchableOpacityProps;

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({backgroundColor})=> backgroundColor ?? colors.primary};
  gap: ${({ gap }) => gap}px;
`;
export const Text = styled.Text<{textColor?: string}>`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: ${({textColor})=> textColor ?? colors.white}
`;
export const Icon = styled.Image``;
