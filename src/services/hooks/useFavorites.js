import AsyncStorage from '@react-native-async-storage/async-storage'

const DB_KEY = '@StarWarsWiki:favorites'

export const useFavorites = () => {
  const addFavorite = async (data) => {
    try {
      let newDb
      const value = await AsyncStorage.getItem(DB_KEY)
      if (value !== null) {
        // já existe bd
        const db = JSON.parse(value)
        newDb = Array[db].push(data)
      } else {
        //não existe, criar
        newDb = [data]
      }
      const jsonValue = JSON.stringify(newDb)
      await AsyncStorage.setItem(DB_KEY, jsonValue)
      return newDb
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }

  const getFavorites = async () => {
    const value = await AsyncStorage.getItem(DB_KEY)
    if (value !== null) {
      const db = JSON.parse(value)
      return db
    }
    return []
  }

  const removeFevorites = async (data) => {
    try {
      let newDb
      const value = await AsyncStorage.getItem(DB_KEY)
      if (value !== null) {
        // já existe bd
        const db = JSON.parse(value)
        newDb = Array[db].filter(
          (fv) => fv.id === data.id && fv.type === data.type
        )
      } else {
        //não existe, criar
        newDb = []
      }
      return newDb
    } catch (error) {
      console.log({ error })
      return { error }
    }
  }

  return {
    addFavorite,
    getFavorites,
    removeFevorites,
  }
}
