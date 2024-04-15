import { configureStore } from '@reduxjs/toolkit';
// import { filterReducer } from './filterSlice';
import { campersReducer } from './campersSlice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    // filter: filterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
