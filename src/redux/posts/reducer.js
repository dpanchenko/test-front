import {
  IMPORT_START,
  IMPORT_SUCCESS,
  IMPORT_FAIL,
  LIST_START,
  LIST_SUCCESS,
  LIST_FAIL,
  ITEM_START,
  ITEM_SUCCESS,
  ITEM_FAIL,
  RESET,
} from './constants';

const initialState = {
  item: null,
  loadingItem: false,
  errorItem: null,
  items: [],
  count: 0,
  loadingList: false,
  errorList: null,
  loadingImport: false,
  errorImport: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case IMPORT_START: {
      return {
        ...state,
        loadingImport: true,
        errorImport: null,
      };
    }
    case IMPORT_SUCCESS: {
      return {
        ...state,
        loadingImport: false,
        errorImport: null,
      };
    }
    case IMPORT_FAIL: {
      return {
        ...state,
        loadingImport: false,
        errorImport: action.payload,
      };
    }

    case LIST_START: {
      return {
        ...state,
        loadingList: true,
        errorList: null,
      };
    }
    case LIST_SUCCESS: {
      return {
        ...state,
        items: action.payload.items,
        count: action.payload.count,
        loadingList: false,
        errorList: null,
      };
    }
    case LIST_FAIL: {
      return {
        ...state,
        items: [],
        count: 0,
        page: 1,
        loadingList: false,
        errorList: action.payload,
      };
    }
    case ITEM_START: {
      return {
        ...state,
        loadingItem: true,
        errorItem: null,
      };
    }
    case ITEM_SUCCESS: {
      return {
        ...state,
        item: action.payload,
        loadingItem: false,
        errorItem: null,
      };
    }
    case ITEM_FAIL: {
      return {
        ...state,
        item: null,
        loadingItem: false,
        errorItem: action.payload,
      };
    }
    case RESET:
      return initialState;
    default:
      return state;
  }
}

export default reducer;
