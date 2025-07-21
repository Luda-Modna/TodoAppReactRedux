import { createSlice } from '@reduxjs/toolkit';

const initialState = { status: 'all', overdue: 'all' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      return { ...state, ...payload };
    },
    setOverdueFilter: (state, { payload }) => {
      state.overdue = payload;
    },
  },
});

const { reducer, actions } = filterSlice;

export const { setFilter, setOverdueFilter } = actions;

export default reducer;
