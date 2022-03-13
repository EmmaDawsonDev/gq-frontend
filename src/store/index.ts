// import { createStore } from 'redux'

// export interface IState {
//   user: string
// }

// const initialState = {
//   user: 'Bob',
// }

// const userReducer = (state: IState = initialState, action: unknown) => {
//   return state
// }

// const store = createStore(userReducer)

// export default store

import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import requestStateSlice from './requestState/requestStateSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    requestState: requestStateSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: { user: UserState}
export type AppDispatch = typeof store.dispatch
