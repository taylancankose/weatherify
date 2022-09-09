import {configureStore} from '@reduxjs/toolkit';
import weatherSlice from './weatherSlice';

const store = configureStore({
  reducer: {
    weatherify: weatherSlice,
  },
});
export default store;
