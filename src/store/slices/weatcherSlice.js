import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '../../api';

const initialState = {
  weather: { current: {} },
  isFetching: false,
  error: null,
};

export const getWeatherThunk = createAsyncThunk(
  'weather/getWeather',
  async ( thunkAPI) => {
    try {
      const { data } = await API.getWeather();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue({ message: err.message });
    }
  }
);

const weatherSlice = createSlice({
  initialState,
  name: 'weather',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getWeatherThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getWeatherThunk.fulfilled, (state, { payload }) => {
      state.weather = payload;
      state.isFetching = false;
    });
    builder.addCase(getWeatherThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

const { reducer, actions } = weatherSlice;

export default reducer;
