import { questionSlice } from './questionSlice'
import { requestStateSlice } from '../requestState/requestStateSlice'
import { getQuestions } from '../../API'
import { IQuestion } from '../../types/question'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '..'

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

export const fetchQuestions =
  (lat: number, lng: number): AppThunk =>
  async dispatch => {
    dispatch(requestStateSlice.actions.showSpinner())
    dispatch(requestStateSlice.actions.clearError())
    try {
      const questions: IQuestion[] | undefined = await getQuestions(lat, lng)

      if (questions) {
        dispatch(questionSlice.actions.fetchQuestions(questions))
      } else {
        dispatch(requestStateSlice.actions.setError('Something went wrong, unable to fetch questions at this time.'))
      }
      dispatch(requestStateSlice.actions.hideSpinner())
    } catch (error) {
      dispatch(requestStateSlice.actions.logErrorAndHideSpinner('Something went wrong. Please try again.'))
    }
  }
