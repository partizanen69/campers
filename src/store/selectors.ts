import { RootState } from './store';

export const selectCampers = (state: RootState) => {
  return state.campers.items;
};

export const selectNextPage = (state: RootState) => {
  return state.campers.nextPage;
};

export const selectCamperSelectedForModal = (state: RootState) =>
  state.campers.camperSelectedForModal;

export const selectIsInitialCampersLoading = (state: RootState) => {
  return state.campers.isInitialLoading;
};

export const selectIsMoreDataToFetch = (state: RootState) => {
  return state.campers.isMoreDataToFetch;
};

export const selectIsLoadingMore = (state: RootState) => {
  return state.campers.isLoadingMore;
};
