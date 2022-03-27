import { userSlice } from './userSlice'
import { requestStateSlice } from '../requestState/requestStateSlice'
import { login, signup } from '../../API'
import { UserDetails, IUser } from '../../types/user'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '..'

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

export const loginUser =
  (user: UserDetails, remember: boolean): AppThunk =>
  async dispatch => {
    dispatch(requestStateSlice.actions.showSpinner())
    dispatch(requestStateSlice.actions.clearError())
    try {
      const loggedInUser = await login(user)
      if (loggedInUser && remember) {
        localStorage.setItem('user', JSON.stringify(loggedInUser))
      }
      if (loggedInUser && !remember) {
        sessionStorage.setItem('user', JSON.stringify(loggedInUser))
      }
      if (loggedInUser) {
        dispatch(userSlice.actions.login(loggedInUser))
      } else {
        dispatch(requestStateSlice.actions.setError('Unable to authenticate. Your username and password do not match our records.'))
      }
      dispatch(requestStateSlice.actions.hideSpinner())
    } catch (error) {
      dispatch(requestStateSlice.actions.logErrorAndHideSpinner('Something went wrong. Please try again.'))
    }
  }

export const setUserFromStorage =
  (user: IUser): AppThunk =>
  async dispatch => {
    dispatch(requestStateSlice.actions.showSpinner())
    dispatch(requestStateSlice.actions.clearError())

    try {
      dispatch(userSlice.actions.login(user))
      dispatch(requestStateSlice.actions.hideSpinner())
    } catch (error) {
      dispatch(requestStateSlice.actions.logErrorAndHideSpinner('Something went wrong. Please try again.'))
    }
  }

export const logoutUser = (): AppThunk => async dispatch => {
  dispatch(requestStateSlice.actions.clearError())
  try {
    localStorage.removeItem('user')
    sessionStorage.removeItem('user')
    dispatch(userSlice.actions.logout())
  } catch (error) {
    dispatch(requestStateSlice.actions.setError('Something went wrong. Please try again.'))
  }
}

export const signupUser =
  (user: UserDetails): AppThunk =>
  async dispatch => {
    dispatch(requestStateSlice.actions.showSpinner())
    dispatch(requestStateSlice.actions.clearError())

    try {
      const success = await signup(user)
      console.log(success)
      if (success) {
        dispatch(loginUser({ email: user.email, password: user.password }, false))
      }
      if (!success) {
        dispatch(requestStateSlice.actions.setError('Email already registered.'))
      }
      dispatch(requestStateSlice.actions.hideSpinner())
    } catch (error) {
      dispatch(requestStateSlice.actions.logErrorAndHideSpinner('Something went wrong. Please try again.'))
    }
  }