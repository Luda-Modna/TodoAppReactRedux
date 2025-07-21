import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: 'all',
  reducers: {
    setFilter: (state, { payload }) => payload,
  },
});

const { reducer, actions } = filterSlice;

export const { setFilter } = actions;

export default reducer;
