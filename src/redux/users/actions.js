import {
  ITEM,
  ITEM_START,
  ITEM_SUCCESS,
  ITEM_FAIL,
  RESET,
} from './constants';

export const getItem = payload => ({
  type: ITEM,
  payload,
});

export const getItemStart = payload => ({
  type: ITEM_START,
  payload,
});

export const getItemSuccess = payload => ({
  type: ITEM_SUCCESS,
  payload,
});

export const getItemFail = payload => ({
  type: ITEM_FAIL,
  payload,
});

export const reset = () => ({
  type: RESET,
});
