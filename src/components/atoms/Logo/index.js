import React from 'react'
import { LogoImage } from './styles'

const sizes = {
  small: 28,
  large: 64,
}

export const Logo = ({ size }) => {
  return (
    <LogoImage
      source={require('../../../../assets/logo.png')}
      size={sizes[size || 'large']}
    />
  )
}
