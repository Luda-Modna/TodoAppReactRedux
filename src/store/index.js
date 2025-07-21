import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/tasksSlice';
import filterReducer from './slices/filterSlice';

const store = configureStore({
  reducer: {
    tasksList: tasksReducer,
    filter: filterReducer,
  },
});

export default store;
