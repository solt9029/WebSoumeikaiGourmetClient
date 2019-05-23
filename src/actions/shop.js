import { history } from '../history';
import axios from 'axios';
import apiConfig from '../config/api';
import qs from 'qs';

export const START_REQUEST = 'START_REQUEST';
export const FINISH_REQUEST_SUCCESS = 'FINISH_REQUEST_SUCCESS';
export const FINISH_REQUEST_FAILURE = 'FINISH_REQUEST_FAILURE';
export const UPDATE_KEYWORD = 'UPDATE_KEYWORD';
export const UPDATE_CANCEL_TOKEN_SOURCE = 'UPDATE_CANCEL_TOKEN_SOURCE';
export const UPDATE_AREA = 'UPDATE_AREA';

export const startRequest = () => ({
  type: START_REQUEST,
});

export const finishRequestSuccess = list => ({
  type: FINISH_REQUEST_SUCCESS,
  payload: {
    list: list,
  },
});

export const finishRequestFailure = error => ({
  type: FINISH_REQUEST_FAILURE,
  payload: {
    error: error,
  },
});

export const updateKeyword = keyword => ({
  type: UPDATE_KEYWORD,
  payload: {
    keyword: keyword,
  },
});

export const updateArea = area => ({
  type: UPDATE_AREA,
  payload: {
    area: area,
  },
});

export const updateCancelTokenSource = cancelTokenSource => ({
  type: UPDATE_CANCEL_TOKEN_SOURCE,
  payload: {
    cancelTokenSource: cancelTokenSource,
  },
});

const stringifySearchQuery = (keyword, area = '') => {
  return qs.stringify(
    {
      area,
      keyword,
    },
    { addQueryPrefix: true }
  );
};

export const update = (keyword, area) => {
  return async (dispatch, getState) => {
    // update url
    history.replace({
      search: stringifySearchQuery(keyword, area),
    });

    // update keyword state
    dispatch(updateKeyword(keyword));

    // update area state
    dispatch(updateArea(area));

    // if the previous api request continues, stop it!
    const prevCancelTokenSource = getState().shop.cancelTokenSource;
    if (prevCancelTokenSource !== null) {
      prevCancelTokenSource.cancel();
    }

    // save cancel token source for the next action
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    dispatch(updateCancelTokenSource(source));

    // start request!
    dispatch(startRequest());

    try {
      const response = await axios.get(
        `http://${apiConfig.host}:${apiConfig.port}${apiConfig.shops}`,
        {
          cancelToken: source.token,
          params: {
            area,
            keyword,
          },
        }
      );
      dispatch(finishRequestSuccess(response.data));
    } catch (error) {
      dispatch(finishRequestFailure(error));
    }
  };
};
