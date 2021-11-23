import { createStore } from 'redux'

export interface IState {
  user: string
}

const initialState = {
  user: 'Bob',
}

const userReducer = (state: IState = initialState, action: unknown) => {
  return state
}

const store = createStore(userReducer)

export default store
