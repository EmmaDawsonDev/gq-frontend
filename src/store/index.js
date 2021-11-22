import { createStore } from 'redux'

const initialState = {
  user: 'Bob',
}

const userReducer = (state = initialState, action) => {
  return state
}

const store = createStore(userReducer)

export default store
