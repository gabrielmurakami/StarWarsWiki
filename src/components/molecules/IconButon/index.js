import React from 'react'
import { ButtonContainer } from './styles'
import { Text } from '~/components/atoms/Text'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '~/styles'

export const IconButton = ({ iconName, label, onPress }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <Ionicons
        name={iconName}
        size={theme.metrics.px(24)}
        color={theme.colors.white}
      />
      <Text fontFamily="semiBold" size={10} mt={3}>
        {label}
      </Text>
    </ButtonContainer>
  )
}
