import React from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native'

const mapStateToProps = store => {
  return {
    value: store.value
  }
}

const NewItem = props => {
  const { dispatch, value } = props

  const setValue = value => {
    return {
      type: 'SET_VALUE',
      value
    }
  }

  const addItem = item => {
    return {
      type: 'ADD_ITEM',
      name: item
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <TextInput
          autoCapitalize='none'
          placeholder='to do...'
          value={value}
          onChangeText={value => dispatch(setValue(value))}
        />

        <Button
          onPress={() => dispatch(addItem(value))}
          title='Add todo'
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default connect(mapStateToProps)(NewItem)
