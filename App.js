import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import InitialScreen from './src/screens/InitialScreen'
import configureStore from './configureStore'
import rootReducer from './rootReducer'
import rootSaga from './saga/saga'

// create the store
const store = configureStore(rootReducer, rootSaga)

const App = () => (
  <Provider store={store}>
    {/* @TODO add Routing */}
    <View style={styles.container}>
      <InitialScreen />
    </View>
  </Provider>
)

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
