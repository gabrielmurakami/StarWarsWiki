import React from 'react'
import { PlayButtonContainer } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '~/styles'
import { Text } from '~/components/atoms'

export const PlayButton = () => {
  return (
    <PlayButtonContainer>
      {/* <Ionicons 
      name='play'
      size={theme.metrics.px(16)}
      color={theme.colors.black}
      />
      <Text fontFamily="bold" size={14} color="black">
        Play
      </Text> */}
    </PlayButtonContainer>
  )
}
