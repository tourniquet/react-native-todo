import initialState from './initialState'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return Object.assign({}, state, {
        value: action.value
      })
    case 'ADD_ITEM':
      return Object.assign({}, state, {
        items: state.items.concat({
          id: state.items.length,
          name: action.name,
          done: false
        }),
        value: ''
      })
    default:
      return state
  }
}

export default reducer
