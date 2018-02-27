import React from 'react'
import { connect } from 'react-redux'
import {
  CheckBox,
  FlatList,
  Text,
  View
} from 'react-native'

const mapStateToProps = store => {
  return {
    items: store.items
  }
}

const UnorderedList = props => {
  const { items } = props

  return (
    <FlatList
      data={items}
      renderItem={({item}) => (
        <View>
          <Text>{item.name}</Text>

          <CheckBox
            value={item.done}
            // onValueChange={() => sayHello()}
          />
        </View>
      )}

      keyExtractor={item => String(item.id)}
    />
  )
}

export default connect(mapStateToProps)(UnorderedList)
