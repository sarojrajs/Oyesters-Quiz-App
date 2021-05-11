import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/User'
import answerReducer from '../features/Answer'
export const store = configureStore({
  reducer: {
    user:userReducer,
    answer:answerReducer,
  },
});
