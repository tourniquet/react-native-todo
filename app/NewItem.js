import React from 'react'
import { connect } from 'react-redux'
import {
  Button,
  TextInput,
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
      key: item
    }
  }

  return (
    <View>
      <TextInput
        autoCapitalize='none'
        placeholder='to do...'
        value={value}
        onChange={value => dispatch(setValue(value))}
      />

      <Button
        // disabled={value.length || false}
        onPress={() => dispatch(addItem(value))}
        title='Add todo'
      />
    </View>
  )
}

export default connect(mapStateToProps)(NewItem)
