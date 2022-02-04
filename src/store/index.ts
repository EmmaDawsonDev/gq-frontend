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

// import { configureStore } from '@reduxjs/toolkit'
// // ...

// // export const store = configureStore({
// //   reducer: {
// //     posts: postsReducer,
// //     comments: commentsReducer,
// //     users: usersReducer,
// //   },
// // })

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch