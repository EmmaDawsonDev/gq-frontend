import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface RequestState {
  loading: boolean
  error: any
}

const initialState: RequestState = {
  loading: false,
  error: null,
}

export const requestStateSlice = createSlice({
  name: 'requestState',
  initialState,
  reducers: {
    showSpinner: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    hideSpinner: state => ({
      ...state,
      loading: false,
    }),
    logErrorAndHideSpinner: (state, action: PayloadAction<any>) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
    setError: (state, action: PayloadAction<any>) => ({
      ...state,
      error: action.payload,
    }),
    clearError: state => ({
      ...state,
      error: null,
    }),
  },
})

export const { showSpinner, hideSpinner, logErrorAndHideSpinner, setError, clearError } = requestStateSlice.actions

export default requestStateSlice.reducer
