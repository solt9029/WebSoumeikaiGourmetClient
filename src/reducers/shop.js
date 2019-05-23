import {
  START_REQUEST,
  FINISH_REQUEST_SUCCESS,
  FINISH_REQUEST_FAILURE,
  UPDATE_KEYWORD,
  UPDATE_CANCEL_TOKEN_SOURCE,
  UPDATE_AREA,
} from '../actions/shop';

const initialState = {
  list: [],
  keyword: '',
  area: '',
  cancelTokenSource: null,
  loading: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FINISH_REQUEST_SUCCESS:
      return {
        ...state,
        list: action.payload.list,
        cancelTokenSource: null,
        loading: false,
      };
    case FINISH_REQUEST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload.keyword,
      };
    case UPDATE_AREA:
      return {
        ...state,
        area: action.payload.area,
      };
    case UPDATE_CANCEL_TOKEN_SOURCE:
      return {
        ...state,
        cancelTokenSource: action.payload.cancelTokenSource,
      };
    default:
      return state;
  }
};
