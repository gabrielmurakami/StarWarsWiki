import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { CardContainer, CardImage } from './styles'
import { useDataStore } from '~/services/stores'

const sizes = {
  small: {
    h: 124,
    w: 88,
  },
  large: {
    h: 150,
    w: 102,
  },
}

export const Card = ({ item, size }) => {
  const navigation = useNavigation()
  const { setSelectedData } = useDataStore()

  const onSelectedItem = () => {
    setSelectedData(item)
    navigation.navigate('Detail')
  }
  return (
    <CardContainer
      onPress={() => onSelectedItem()}
      size={size ? sizes[size] : sizes.small}
    >
      <CardImage source={{ uri: item.image_url }} />
    </CardContainer>
  )
}
