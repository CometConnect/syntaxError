import { Text, View } from 'react-native'
import { rem, TextS, ViewS } from './types'

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#151515',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#fff",
    fontSize: 3 * rem,
  },
} as {
  container: ViewS
  text: TextS
}

export default () =>
<View style={styles.container}>
  <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
</View>