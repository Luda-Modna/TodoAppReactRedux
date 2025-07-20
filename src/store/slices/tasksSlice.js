import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  initialState,
  name: 'tasks',
  reducers: {
    createToDo: (state, { payload }) => {
      state.tasks.push({ ...payload, id: uuidv4(), isDone: false });
    },
    deleteTodo: (state, { payload }) => {
      state.tasks = state.tasks.filter(t => t.id !== payload);
    },
    updateTask: (state, { payload: { id, data } }) => {
      const updateIndex = state.tasks.findIndex(t => t.id === id);
      state.tasks[updateIndex] = {
        ...state.tasks[updateIndex],
        ...data,
      };
    },
  },
});

const { reducer, actions } = tasksSlice;

export const { createToDo, deleteTodo, updateTask } = actions;

export default reducer;
