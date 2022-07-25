import React, { useEffect, useState } from 'react'
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

  if( loading ) {
    <ScreenScrollContainer>
      <Loader />
    </ScreenScrollContainer>
  }

  return (
    <ScreenScrollContainer align="flex-start" justify="flex-start">
      <Hero item={films[0]} />
      <HomeList title="Filmes" data={films} />
      <HomeList title="Personagens" data={characters} />
    </ScreenScrollContainer>
  )
}
