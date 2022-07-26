import React, { useEffect } from 'react'
import { ScreenScrollContainer, Text } from '~/components'
import { useFavorites } from '~/services/hooks'

export const FavoritesScreen = ({ navigation }) => {
  const { getFavorites } = useFavorites()

  const callGetFavorites = async () => {
    const favorites = await getFavorites()
    console.log({ favorites })
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      callGetFavorites()
    })
    return unsubscribe
  }, [])

  return (
    <ScreenScrollContainer withPadding>
      <Text fontFamily="bold" size={28}>
        Favorite
      </Text>
    </ScreenScrollContainer>
  )
}
