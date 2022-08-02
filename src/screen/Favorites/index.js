import React, { useEffect, useState } from 'react'
import { ScreenScrollContainer, Text, GridList } from '~/components'
import { useFavorites } from '~/services/hooks'

export const FavoritesScreen = ({ navigation }) => {
  const [favoritesList, setFavoritesList] = useState([])
  const { getFavorites } = useFavorites()

  const callGetFavorites = async () => {
    const favorites = await getFavorites()
    setFavoritesList(favorites)
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      callGetFavorites()
    })
    return unsubscribe
  }, [])

  return (
    <ScreenScrollContainer withPadding>
      <Text fontFamily="bold" size={28} mb={24}>
        Favoritos
      </Text>
      <GridList data={favoritesList} type="favorites" />
    </ScreenScrollContainer>
  )
}
