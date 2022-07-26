import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { ScreenScrollContainer, HomeList, Hero, Loader } from '../../components'
import { useGetData } from '~/services/hooks'

export const Home = () => {
  const { getFilms, getCharacters } = useGetData()
  const [loading, setLoading] = useState(true)
  const [films, setFilms] = useState([])
  const [characters, setCharacters] = useState([])

  const callGetData = async () => {
    const filmsResponse = await getFilms()
    const charactersResponse = await getCharacters()

    if (!filmsResponse.error && !charactersResponse.error) {
      setFilms(filmsResponse)
      setCharacters(charactersResponse)
      setLoading(false)
    }
  }

  useEffect(() => {
    callGetData()
  }, [])

  if (loading) {
    return (
      <ScreenScrollContainer>
        <Loader />
      </ScreenScrollContainer>
    )
  }

  return (
    <ScreenScrollContainer align="flex-start" justify="flex-start">
      <Hero item={{ ...films[0], type: 'Filme' }} />
      <HomeList title="Filmes" data={films} type="Filme" />
      <HomeList title="Personagens" data={characters} type="Personagem" />
    </ScreenScrollContainer>
  )
}
