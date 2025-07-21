import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/tasksSlice';
import filterReducer from './slices/filterSlice';
import weatherReducer from './slices/weatcherSlice';

const store = configureStore({
  reducer: {
    tasksList: tasksReducer,
    filter: filterReducer,
    weatherData: weatherReducer,
  },
});

export default store;
