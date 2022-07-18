import React from 'react'
import { ScreenScrollContainer, HomeList, Hero } from '../../components'

const FAKE_DATA_CHARACTERES = [
  {
    id: 0,
    type: 'Personagem',
    title: 'Darth Vader',
    subtitle: 'Anakin Skywalker',
    description:
      'Darth Vader (anteriormente chamado Anakin Skywalker) é um personagem fictício da saga de ficção científica Star Wars (Guerra nas Estrelas); um dos protagonistas centrais juntamente com Obi-Wan Kenobi, da trilogia prequel (mas se tornando o vilão secundário no terceiro filme após a morte do General Grievous), que posteriormente tornou-se um dos antagonistas principais da trilogia original ao lado do Imperador Palpatine (porém acaba se redimindo no final), e um anti-herói póstumo na trilogia de sequência, sendo que suas ações ainda afetam o universo de Star Wars, sendo para o bem ou para o mal, principalmente quando se trata de seu neto, Ben Solo, o Kylo Ren, que tem por Vader uma admiração cega, e deseja mais do que tudo ser como ele (e até superá-lo).[1][2][3]',
    image_url:
      'https://cdn.ome.lt/qnK3hf0_08-cjuoRDb98LkEg3Do=/1200x630/smart/extras/conteudos/darth-vader-fortnite.jpg',
  },
  {
    id: 1,
    image_url:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/4/45/Yoda.jpg/200px-Yoda.jpg',
  },
]

export const Home = () => {
  return (
    <ScreenScrollContainer align="flex-start" justify="flex-start">
      <Hero
        item={{
          title: 'Episodio I',
          subtitle: 'A Ameaça Fantasma',
          type: 'Filme',
          image_url:
            'https://upload.wikimedia.org/wikipedia/pt/3/30/Star_Wars_Epis%C3%B3dio_1_Amea%C3%A7a_Fantasma.jpg',
        }}
      />
      <HomeList title="Filmes" data={FAKE_DATA_CHARACTERES} />
      <HomeList title="Personagens" data={FAKE_DATA_CHARACTERES} />
    </ScreenScrollContainer>
  )
}
