import React from 'react'
import { TagContainer } from './styles'
import { Text } from '~/components/atoms'

export const Tag = ({ children, ...props }) => (
  <TagContainer {...props}>
    <Text fontFamily="bold" size={14}>
      {children}
    </Text>
  </TagContainer>
)
