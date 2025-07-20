import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  tasks: [{ id: uuidv4(), text: 'app' }],
};

const tasksSlice = createSlice({
  initialState,
  name: 'tasks',
  reducers: {},
});

const { reducer, actions } = tasksSlice;

export default reducer;
