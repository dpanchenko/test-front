import {
  ITEM_START,
  ITEM_SUCCESS,
  ITEM_FAIL,
  RESET,
} from './constants';

const initialState = {
  item: null,
  loading: false,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
        case ITEM_START: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case ITEM_SUCCESS: {
      return {
        ...state,
        item: action.payload,
        loading: false,
        error: null,
      };
    }
    case ITEM_FAIL: {
      return {
        ...state,
        item: null,
        loading: false,
        error: action.payload,
      };
    }
    case RESET:
      return initialState;
    default:
      return state;
  }
}

export default reducer;
