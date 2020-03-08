import {
  LOAD_START,
  LOAD_SUCCESS,
  LOAD_FAIL,
} from './constants';

export const initialState = {
  loading: false,
  loaded: false,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_START: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        error: null,
      };
    }
    case LOAD_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}

export default reducer;
