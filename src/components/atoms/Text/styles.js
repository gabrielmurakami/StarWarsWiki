import styled from "styled-components/native";

export const CustomText = styled.Text`
  font-size: 24px;
  margin-top: 7px;
  color: ${({ color }) => color || "#FFF"};
  font-weight: bold;
`;
