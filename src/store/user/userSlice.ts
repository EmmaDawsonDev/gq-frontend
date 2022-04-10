import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../types/user'

export interface UserState {
  user: IUser | undefined
}

const initialState: UserState = {
  user: undefined,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
    },
    logout: state => {
      state.user = undefined
    },
    reset: () => {
      return initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, reset } = userSlice.actions

export default userSlice.reducer
