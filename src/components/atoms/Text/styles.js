import styled from 'styled-components/native'

export const CustomText = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(24)}px;
  margin-top: ${({ theme }) => theme.metrics.px(7)}px;
  color: ${({ color, theme }) => color || theme.colors.white};
  font-family: 'SourceSansPro_700Bold';
`
