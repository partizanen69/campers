import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchInitialCampers, fetchMoreCampers } from './operations';
import { PER_PAGE_CAMPERS_LIMIT } from '../api/campers-api';

export interface CampersSliceState {
  items: Camper[];
  isInitialLoading: boolean;
  error: Error | null;

  isLoadingMore: boolean;
  nextPage: number;
  isMoreDataToFetch: boolean;

  camperSelectedForModal: null | Camper;
}

export interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

export interface Camper {
  _id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  adults: number;
  children: number;
  engine: string;
  transmission: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  description: string;
  details: {
    airConditioner?: number;
    bathroom?: number;
    kitchen?: number;
    beds?: number;
    TV?: number;
    CD?: number;
    radio?: number;
    shower?: number;
    toilet?: number;
    freezer?: number;
    hob?: number;
    microwave?: number;
    gas?: string;
    water?: string;
  };
  gallery: string[];
  reviews: Review[];
  favorite?: boolean;
}

export type UpdateCamper = { _id: string } & Partial<Omit<Camper, '_id'>>;

const initialState: CampersSliceState = {
  items: [],
  isInitialLoading: false,
  error: null,

  isLoadingMore: false,
  nextPage: 1,
  isMoreDataToFetch: true,

  camperSelectedForModal: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    updateCamper(state, action: PayloadAction<UpdateCamper>) {
      const { _id, ...restCamper } = action.payload;

      const idx = state.items.findIndex(camper => camper._id === _id);
      if (idx === -1) {
        return state;
      }

      const updatedCamper = {
        ...state.items[idx],
        ...restCamper,
      };

      const itemsCopy = [...state.items];
      itemsCopy[idx] = updatedCamper;

      return {
        ...state,
        items: itemsCopy,
      };
    },
    setCamperSelectedForModal(
      state,
      action: PayloadAction<CampersSliceState['camperSelectedForModal']>
    ) {
      return {
        ...state,
        camperSelectedForModal: action.payload,
      };
    },
    setCampersStateToInitial(state) {
      Object.assign(state, initialState);
    },
  },
  extraReducers: builder => {
    builder
      // fetchInitialCampers
      .addCase(fetchInitialCampers.pending, state => {
        state.isInitialLoading = true;
      })
      .addCase(fetchInitialCampers.rejected, (state, action) => {
        state.isInitialLoading = false;
        state.error = action.payload as Error;
      })
      .addCase(fetchInitialCampers.fulfilled, (state, action) => {
        const fetchedCampers = action.payload;

        state.isInitialLoading = false;
        state.error = null;
        state.items = fetchedCampers;

        if (fetchedCampers.length === PER_PAGE_CAMPERS_LIMIT) {
          state.nextPage += 1;
        } else {
          state.isMoreDataToFetch = false;
        }
      })
      // fetchMoreCampers
      .addCase(fetchMoreCampers.pending, state => {
        state.isLoadingMore = true;
      })
      .addCase(fetchMoreCampers.rejected, (state, action) => {
        state.isLoadingMore = false;
        state.error = action.payload as Error;
      })
      .addCase(fetchMoreCampers.fulfilled, (state, action) => {
        const fetchedCampers = action.payload;

        state.isLoadingMore = false;
        state.error = null;
        state.items = state.items.concat(fetchedCampers);

        if (fetchedCampers.length === PER_PAGE_CAMPERS_LIMIT) {
          state.nextPage += 1;
        } else {
          state.isMoreDataToFetch = false;
        }
      });
    // addContact
    // .addCase(addContact.pending, handlePending)
    // .addCase(addContact.rejected, handleRejected)
    // .addCase(addContact.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items.push(action.payload);
    // })
    // deleteContact
    // .addCase(deleteContact.pending, handlePending)
    // .addCase(deleteContact.rejected, handleRejected)
    // .addCase(deleteContact.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items = state.items.filter(
    //     contact => contact.id !== action.payload.id
    //   );
    // });
  },
});

export const {
  updateCamper,
  setCamperSelectedForModal,
  setCampersStateToInitial,
} = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
