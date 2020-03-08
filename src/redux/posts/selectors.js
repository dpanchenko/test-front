import { createSelector } from 'reselect';

export const selectorPosts = (state) => state.posts;

export const selectorItems = createSelector(
  selectorPosts,
  (state) => state.items,
);

export const selectorCount = createSelector(
  selectorPosts,
  (state) => state.count,
);

export const selectorPage = createSelector(
  selectorPosts,
  (state) => state.page,
);

export const selectorLoadingList = createSelector(
  selectorPosts,
  (state) => state.loadingList,
);

export const selectorErrorList = createSelector(
  selectorPosts,
  (state) => state.errorList,
);

export const selectorItem = createSelector(
  selectorPosts,
  (state) => state.item,
);

export const selectorLoadingItem = createSelector(
  selectorPosts,
  (state) => state.loadingItem,
);

export const selectorErrorItem = createSelector(
  selectorPosts,
  (state) => state.errorItem,
);

export const selectorLoadingImport = createSelector(
  selectorPosts,
  (state) => state.loadingImport,
);

export const selectorErrorImport = createSelector(
  selectorPosts,
  (state) => state.errorImport,
);
