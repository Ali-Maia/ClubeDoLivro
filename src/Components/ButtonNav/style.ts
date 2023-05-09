import styled from "styled-components/native";
import colors from "../../utils/colors";

export const Button = styled.TouchableOpacity`
  width: 280px;
  height: 52px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${colors.primary};
  gap: 30px;
`;
export const Text = styled.Text`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: ${colors.white};
`;
export const Icon = styled.Image`
  justify-self: flex-end;
`;
