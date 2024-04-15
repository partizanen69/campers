import { RootState } from './store';

export const selectCampers = (state: RootState) => {
  console.log('state', state);
  return state.campers.items;
};

// export const selectIsContactsLoading = state => state.contacts.isLoading;

// export const selectFilter = state => state.filter;
