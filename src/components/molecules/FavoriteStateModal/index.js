import React from 'react'
import {
  FavoriteImage,
  Modal,
  ModalBackgroundContainer,
  ModalContentContainer,
} from './styles'
import { Text } from '~/components/atoms'

import favoriteAdded from '../../../../assets/favorite-added.png'
import favoriteRemoved from '../../../../assets/favorite-removed.png'

export const FavoritesStateModal = ({ visible, onClose, type }) => {
  return (
    <Modal visible={visible} transparent={true} onRequestClose={onClose}>
      <ModalBackgroundContainer>
        <ModalContentContainer>
          <FavoriteImage
            source={type === 'added' ? favoriteAdded : favoriteRemoved}
          />
          <Text mt={12} size={28} fontFamily="bold" align="center ">{`Favorito ${
            type === 'added' ? 'adicionado' : 'removido'
          } com sucesso!`}</Text>
        </ModalContentContainer>
      </ModalBackgroundContainer>
    </Modal>
  )
}
