/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {
  View
} from 'react-native'

// components
import UnorderedList from './UnorderedList'
import NewItem from './NewItem'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <UnorderedList />
        <NewItem />
      </View>
    </Provider>
  )
}

export default App
