import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import Config from 'react-native-config';
export const getWeatherData = createAsyncThunk('weather', async city => {
  try {
    const res = await axios.get(
      `${Config.WEATHER_API_BASE_URL}weather?q=${city}&appid=${Config.WEATHER_API_KEY}`,
    );
    return await res.data;
  } catch (error) {
    console.log('weather Error', error);
  }
});

export const getWeatherForecast = createAsyncThunk('forecast', async city => {
  try {
    const res = await axios.get(
      `${Config.WEATHER_API_BASE_URL}forecast?q=${city}&appid=${Config.WEATHER_API_KEY}`,
    );
    return await res.data;
  } catch (error) {
    console.log(error);
  }
});

export const getCityInfo = createAsyncThunk('city', async (lat, lon) => {
  try {
    const res = await axios.get(
      `${Config.REVERSE_GEOCODE_API_BASE_URL}lat=${lat}&lon=${lon}&apiKey=${Config.REVERSE_GEOCODE_API_KEY}`,
    );
    return await res.data;
  } catch (error) {
    console.log(error);
  }
});

export const weatherSlice = createSlice({
  name: 'weatherify',
  initialState: {
    coords: [],
    city: [],
    weatherData: [],
    forecast: [],
    isLoading: false,
    isError: null,
  },
  reducers: {
    setCoords: (state, action) => {
      state.coords = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
  extraReducers: {
    [getWeatherData.fulfilled]: (state, action) => {
      state.weatherData = action.payload;
      state.isLoading = false;
    },
    [getWeatherData.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getWeatherData.rejected]: (state, action) => {
      state.isLoading = true;
      state.isError = action.error.message;
    },
    [getWeatherForecast.fulfilled]: (state, action) => {
      state.forecast = action.payload;
      state.isLoading = false;
    },
    [getWeatherForecast.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getWeatherForecast.rejected]: (state, action) => {
      state.isLoading = true;
      state.isError = action.error.message;
    },
    [getCityInfo.fulfilled]: (state, action) => {
      state.city = action.payload;
      state.isLoading = false;
    },
    [getCityInfo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCityInfo.rejected]: (state, action) => {
      state.isLoading = true;
      state.isError = action.error.message;
    },
  },
});

export const {setCoords, setCity} = weatherSlice.actions;
export default weatherSlice.reducer;
