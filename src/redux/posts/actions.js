import {
  IMPORT,
  IMPORT_START,
  IMPORT_SUCCESS,
  IMPORT_FAIL,
  LIST,
  LIST_START,
  LIST_SUCCESS,
  LIST_FAIL,
  ITEM,
  ITEM_START,
  ITEM_SUCCESS,
  ITEM_FAIL,
  RESET,
} from './constants';

export const doImport = () => ({
  type: IMPORT,
});

export const doImportStart = () => ({
  type: IMPORT_START,
});

export const doImportSuccess = () => ({
  type: IMPORT_SUCCESS,
});

export const doImportFail = (payload) => ({
  type: IMPORT_FAIL,
  payload,
});

export const getList = (payload) => ({
  type: LIST,
  payload,
});

export const getListStart = (payload) => ({
  type: LIST_START,
  payload,
});

export const getListSuccess = (payload) => ({
  type: LIST_SUCCESS,
  payload,
});

export const getListFail = (payload) => ({
  type: LIST_FAIL,
  payload,
});

export const getItem = (payload) => ({
  type: ITEM,
  payload,
});

export const getItemStart = (payload) => ({
  type: ITEM_START,
  payload,
});

export const getItemSuccess = (payload) => ({
  type: ITEM_SUCCESS,
  payload,
});

export const getItemFail = (payload) => ({
  type: ITEM_FAIL,
  payload,
});

export const reset = () => ({
  type: RESET,
});
