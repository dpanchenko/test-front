import { createSelector } from 'reselect';

export const selectorUsers = state => state.users;

export const selectorItem = createSelector(
  selectorUsers,
  state => state.item,
);

export const selectorLoading = createSelector(
  selectorUsers,
  state => state.loading,
);

export const selectorError = createSelector(
  selectorUsers,
  state => state.error,
);

