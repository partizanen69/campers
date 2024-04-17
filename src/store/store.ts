import { configureStore } from '@reduxjs/toolkit';
// import { filterReducer } from './filterSlice';
import { campersReducer } from './campersSlice';
import { catalogPageReducer } from './catalogPageSlice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    catalogPage: catalogPageReducer,
    // filter: filterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
