import React from 'react'
import { connect } from 'react-redux'
import {
  CheckBox,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native'

const mapStateToProps = store => {
  return {
    items: store.items
  }
}

const UnorderedList = props => {
  const { dispatch, items } = props

  const changeItemStatus = id => {
    return {
      type: 'CHANGE_STATUS',
      id
    }
  }

  return (
    <FlatList
      data={items}
      renderItem={({item}) => (
        <View>
          <Text
            style={[styles.itemToBeDone, item.done && styles.itemDone]}
          >
            {item.name}
          </Text>

          <CheckBox
            value={item.done}
            onValueChange={() => dispatch(changeItemStatus(item.id))}
          />
        </View>
      )}

      keyExtractor={item => String(item.id)}
    />
  )
}

export default connect(mapStateToProps)(UnorderedList)

const styles = StyleSheet.create({
  itemToBeDone: {
    color: 'black'
  },
  itemDone: {
    color: 'gray'
  }
})
