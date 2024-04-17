import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Camper } from './campersSlice';

export interface CatalogPageSlice {
  camperSelectedForModal: null | Camper;
}

const initialState: CatalogPageSlice = {
  camperSelectedForModal: null,
};

const catalogPageSlice = createSlice({
  name: 'catalogPage',
  initialState,
  reducers: {
    setCamperSelectedForModal(
      state,
      action: PayloadAction<CatalogPageSlice['camperSelectedForModal']>
    ) {
      return {
        ...state,
        camperSelectedForModal: action.payload,
      };
    },
  },
});

export const { setCamperSelectedForModal } = catalogPageSlice.actions;
export const catalogPageReducer = catalogPageSlice.reducer;
