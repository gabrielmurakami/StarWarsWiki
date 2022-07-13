import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '../../molecules'
import { Text } from '../../atoms'

const FAKE_DATA = [
  {
    id: 0,
    image_url:
      'https://cdn.ome.lt/qnK3hf0_08-cjuoRDb98LkEg3Do=/1200x630/smart/extras/conteudos/darth-vader-fortnite.jpg',
  },
  {
    id: 1,
    image_url:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/4/45/Yoda.jpg/200px-Yoda.jpg',
  },
]

export const HomeList = () => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={FAKE_DATA}
      renderItem={({ item }) => <Card item={item} />}
      keyExtractor={(item) => String(item.id)}
    />
  )
}
