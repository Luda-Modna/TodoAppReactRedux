import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const tasksSlice = createSlice({
  initialState: [],
  name: 'tasks',
  reducers: {
    addTodo: {
      reducer: (state, action) => {},
      prepare: text => {
        const id = uuidv4();
        return { payload: { id, text } };
      },
    },
  },
});

const { reducer, actions } = tasksSlice;

export default reducer;
