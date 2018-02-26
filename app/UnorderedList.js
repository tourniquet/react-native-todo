import React from 'react'
import { connect } from 'react-redux'
import {
  FlatList,
  Text
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
      renderItem={({item}) => <Text>{item.key}</Text>}
    />
  )
}

export default connect(mapStateToProps)(UnorderedList)
