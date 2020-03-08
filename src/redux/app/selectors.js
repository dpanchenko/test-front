import { createSelector } from 'reselect';

export const selectorState = state => state.app;

export const selectorLoading = createSelector(
  selectorState,
  state => state.loading,
);

export const selectorLoaded = createSelector(
  selectorState,
  state => state.loaded,
);

export const selectorError = createSelector(
  selectorState,
  state => state.error,
);
