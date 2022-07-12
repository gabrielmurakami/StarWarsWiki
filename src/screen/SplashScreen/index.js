import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { Text, Logo } from '../../components'

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Logo />
      <Text>Star Wars - Wiki</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 64,
    height: 64,
  },
})
