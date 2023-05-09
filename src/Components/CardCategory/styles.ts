import styled from "styled-components/native";
import colors from "../../utils/colors";

export const CardCategory = styled.TouchableOpacity`
  background-color: ${colors.primary};
  width: 120px;
  height: 120px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${colors.white};
  font-weight: 700;
  font-size: 20px;
  text-transform: capitalize;
`;

export const Circle = styled.View`
  background-color: rgba(247, 230, 255, 0.35);
  border-radius: 200px;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.Image`
  width: 35px;
  height: 35px;
`;
