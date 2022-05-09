import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IQuestion } from '../../types/question'

export interface QuestionState {
  questions: IQuestion[] | []
}

const initialState: QuestionState = {
  questions: [],
}

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    fetchQuestions: (state, action: PayloadAction<IQuestion[]>) => {
      state.questions = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { fetchQuestions } = questionSlice.actions

export default questionSlice.reducer
