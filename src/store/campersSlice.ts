import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';
// import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export interface CampersSliceState {
  items: string[];
  isLoading: boolean;
  error: Error | null;
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
