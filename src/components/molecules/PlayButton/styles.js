import styled from 'styled-components/native'

export const PlayContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.metrics.px(8)}px;
  height: ${({ theme }) => theme.metrics.px(36)}px;
  width: ${({ theme }) => theme.metrics.px(100)}px;
`
