import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { CardContainer, CardImage } from './styles'
import { useDataStore } from '~/services/stores'

export const Card = ({ item }) => {
  const navigation = useNavigation()
  const { setSelectedData } = useDataStore()

  const onSelectedItem = () => {
    setSelectedData(item)
    navigation.navigate('Detail')
  }
  return (
    <CardContainer onPress={() => onSelectedItem()}>
      <CardImage source={{ uri: item.image_url }} />
    </CardContainer>
  )
}
