import React, { useState, useEffect } from 'react'
import { ScreenScrollContainer, Text, Input } from '~/components'
import { useGetData } from '~/services/hooks'
import { GridList } from '~/components'

export const SearchScreen = () => {
  const { getSearchResult } = useGetData()
  const [result, setResult] = useState([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)

  const callGetSearchResult = async () => {
    const result = await getSearchResult(query)

    if (!result.error) {
      setResult(result)
    }

    setLoading(false)
  }

  useEffect(() => {
    if (query.length > 0 && query.length % 3 === 0) {
      callGetSearchResult()
    }
  }, [query])

  return (
    <ScreenScrollContainer withPadding>
      <Text fontFamily="bold" size={28} mb={24}>
        Pesquisa
      </Text>
      <Input
        mb={24}
        value={query}
        onChangeText={(text) => setQuery(text)}
        placeholder="Filme ou nome do personagem"
      />
      <GridList loading={loading} data={result} type="search" />
    </ScreenScrollContainer>
  )
}
