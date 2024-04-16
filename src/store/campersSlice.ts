import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';
// import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = (state: CampersSliceState) => {
  state.isLoading = true;
};

const handleRejected = (
  state: CampersSliceState,
  action: PayloadAction<
    any,
    string,
    {
      arg: void;
      requestId: string;
      requestStatus: 'rejected';
    },
    never
  >
) => {
  state.isLoading = false;
  state.error = action.payload;
};

export interface CampersSliceState {
  items: Camper[];
  isLoading: boolean;
  error: Error | null;
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
}

const initialState: CampersSliceState = {
  items: [],
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // fetchCampers
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
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

export const campersReducer = campersSlice.reducer;
