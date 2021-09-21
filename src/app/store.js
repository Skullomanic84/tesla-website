import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/Cars/CarSlice';

export const store = configureStore({
  reducer: {
    car: carReducer
  },
});
