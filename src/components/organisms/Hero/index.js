import React, { useEffect, useState } from 'react'
import {
  HeroContainer,
  HeroImageBackground,
  HeroGradient,
  ButtonsView,
  ButtonItemView,
} from './styles'
import { colors } from '~/styles/colors'
import { Text, Logo } from '~/components/atoms'
import {
  Tag,
  IconButton,
  WatchButton,
  FavoritesStateModal,
} from '~/components/molecules'
import { useFavorites } from '~/services/hooks'
import { useNavigation } from '@react-navigation/native'
import { useDataStore } from '~/services/stores'

export const Hero = ({ item, onDetail }) => {
  const [loading, setLoading] = useState(true)
  const [isFavorite, setIsFavorite] = useState(false)
  const [showFavoriteModal, setShowFavoriteModal] = useState(null)
  const { addFavorite, getFavorites, removeFavorite } = useFavorites()
  const { image_url, title, subtitle, type } = item
  const navigation = useNavigation()
  const { setSelectedData } = useDataStore()

  const checkIsFavorite = async () => {
    setLoading(true)
    const favorites = await getFavorites()
    const isInFavorite = favorites.filter(
      (fv) => fv.id === item.id && fv.type === item.type
    )
    //console.log({ favorites })
    setIsFavorite(isInFavorite.length > 0)
    setLoading(false)
  }

  useEffect(() => {
    checkIsFavorite()
  }, [])

  const closeFavoriteModal = () => {
    setTimeout(() => {
      setShowFavoriteModal(null)
    }, 1000)
  }

  const addDataToFavorite = async () => {
    await addFavorite(item)
    setShowFavoriteModal('added')
    checkIsFavorite()
    closeFavoriteModal()
  }

  const removeDataFromFavorite = async () => {
    await removeFavorite(item)
    setShowFavoriteModal('removed')
    checkIsFavorite()
    closeFavoriteModal()
  }

  const onPressWatch = () => {
    setSelectedData(item)
    navigation.navigate('Watch')
  }

  const onPressDetail = () => {
    setSelectedData(item)
    navigation.navigate('Detail')
  }

  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri: image_url,
        }}
      >
        <HeroGradient colors={[colors.dark, 'transparent', colors.dark]}>
          {!onDetail && <Logo size="small" />}
          <Tag mt={onDetail ? 224 : 216}>{type}</Tag>
          <Text fontFamily="bold" size={28} mt={5}>
            {title}
          </Text>
          <Text size={18}>{subtitle}</Text>
          <ButtonsView>
            <ButtonItemView align="flex-start">
              <IconButton
                onPress={() =>
                  isFavorite ? removeDataFromFavorite() : addDataToFavorite()
                }
                label={isFavorite ? 'Rem. Favoritos' : 'Add Favoritos'}
                iconName={
                  isFavorite ? 'remove-circle-outline' : 'add-circle-outline'
                }
              />
            </ButtonItemView>

            <ButtonItemView>
              <WatchButton onPress={onPressWatch} />
            </ButtonItemView>

            <ButtonItemView align="flex-end">
              {!onDetail && (
                <IconButton
                  onPress={onPressDetail}
                  label="Saiba Mais"
                  iconName="information-circle-outline"
                />
              )}
            </ButtonItemView>
          </ButtonsView>
        </HeroGradient>
      </HeroImageBackground>
      {!!showFavoriteModal && (
        <FavoritesStateModal
          type={showFavoriteModal}
          visible={!!showFavoriteModal}
          onClose={() => showFavoriteModal(null)}
        />
      )}
    </HeroContainer>
  )
}
