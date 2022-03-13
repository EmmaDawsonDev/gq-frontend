import { userSlice } from './userSlice'
import { requestStateSlice } from '../requestState/requestStateSlice'
import { login } from '../../API'
import { UserDetails, IUser } from '../../types/user'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '..'

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

export const loginUser =
  (user: UserDetails, remember: boolean): AppThunk =>
  async dispatch => {
    dispatch(requestStateSlice.actions.showSpinner)
    console.log('Before try')

    try {
      console.log('inside try')
      const loggedInUser = await login(user)
      if (loggedInUser && remember) {
        localStorage.setItem('user', JSON.stringify(loggedInUser))
      }
      if (loggedInUser && !remember) {
        sessionStorage.setItem('user', JSON.stringify(loggedInUser))
      }

      dispatch(userSlice.actions.login(loggedInUser))
      dispatch(requestStateSlice.actions.hideSpinner)
    } catch (error) {
      console.log('inside error')
      dispatch(requestStateSlice.actions.logErrorAndHideSpinner(error))
    }
  }

export const setUserFromStorage =
  (user: IUser): AppThunk =>
  async dispatch => {
    dispatch(requestStateSlice.actions.showSpinner)

    try {
      dispatch(userSlice.actions.login(user))
      dispatch(requestStateSlice.actions.hideSpinner)
    } catch (error) {
      dispatch(requestStateSlice.actions.logErrorAndHideSpinner(error))
    }
  }

export const logoutUser = (): AppThunk => async dispatch => {
  try {
    console.log('here')

    localStorage.removeItem('user')
    sessionStorage.removeItem('user')
    dispatch(userSlice.actions.logout())
  } catch (error) {
    dispatch(requestStateSlice.actions.setError(error))
  }
}
