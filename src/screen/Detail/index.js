import React from 'react'
import { ScreenScrollContainer, Hero, GoBack } from '../../components'
import { useDataStore } from '~/services/stores'

export const Detail = () => {
  const { selectedData } = useDataStore()
  return (
    <ScreenScrollContainer align="flex-start" justify="flex-start">
      <Hero item={selectedData} onDetail />
      <GoBack />
    </ScreenScrollContainer>
  )
}
