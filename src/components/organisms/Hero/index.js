import React from 'react'
import {
  HeroContainer,
  HeroImageBackground,
  HeroGradient,
  ButtonsView,
} from './styles'
import { colors } from '~/styles/colors'
import { Text, Logo } from '~/components/atoms'
import { Tag, IconButton, PlauButton } from '~/components/molecules'

export const Hero = ({ item, onDetail }) => {
  const { image_url, title, subtitle, type } = item

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
            <IconButton label="Favoritos" iconName="add-circle-outline" />
            {!onDetail && (
              <IconButton
                label="Saiba Mais"
                iconName="information-circle-outline"
              />
            )}
          </ButtonsView>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  )
}
