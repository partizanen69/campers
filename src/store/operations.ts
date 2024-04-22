import { createAsyncThunk } from '@reduxjs/toolkit';
import { Camper } from './campersSlice';
import { doFetchCampers } from '../api/campers-api';
import { isDefined } from '../utils';

export const fetchInitialCampers = createAsyncThunk<
  Camper[],
  { favorite?: boolean } | undefined
>('campers/fetchAll', async ({ favorite } = {}, thunkAPI) => {
  try {
    return doFetchCampers({
      ...(isDefined(favorite) ? { favorite } : null),
    });
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const fetchMoreCampers = createAsyncThunk<
  Camper[],
  { page: number; favorite?: boolean }
>('campers/fetchMore', async ({ page, favorite }, thunkAPI) => {
  try {
    return doFetchCampers({
      page,
      ...(isDefined(favorite) ? { favorite } : null),
    });
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
