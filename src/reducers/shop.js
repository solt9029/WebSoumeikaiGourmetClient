import {
  START_REQUEST,
  FINISH_REQUEST_SUCCESS,
  FINISH_REQUEST_FAILURE,
  UPDATE_KEYWORD,
  UPDATE_CANCEL_TOKEN_SOURCE,
  UPDATE_AREA,
  START_ALL_LIST_REQUEST,
  FINISH_ALL_LIST_REQUEST_FAILURE,
  FINISH_ALL_LIST_REQUEST_SUCCESS,
} from '../actions/shop';

const initialState = {
  list: [],
  keyword: '',
  area: '全ての地域',
  cancelTokenSource: null,
  loading: false,
  error: false,
  allList: [],
  allListLoading: false,
  allListError: false,
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
        error: false,
      };
    case FINISH_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case START_ALL_LIST_REQUEST:
      return {
        ...state,
        allListLoading: true,
      };
    case FINISH_ALL_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        allList: action.payload.allList,
        allListloading: false,
        allListError: false,
      };
    case FINISH_ALL_LIST_REQUEST_FAILURE:
      return {
        ...state,
        allListLoading: false,
        allListError: true,
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
