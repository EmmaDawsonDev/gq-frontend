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
    answerQuestion: (state, action) => {
      const updatedQuestions = state.questions.map(obj => {
        if (obj._id === action.payload) {
          console.log('Updating')
          return { ...obj, properties: { ...obj.properties, answered: true } }
        }
        console.log('Here instead')
        return obj
      })

      state.questions = updatedQuestions
    },
  },
})

// Action creators are generated for each case reducer function
export const { fetchQuestions, answerQuestion } = questionSlice.actions

export default questionSlice.reducer
