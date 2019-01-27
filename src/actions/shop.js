import { history } from '../history';
import axios from 'axios';
import apiConfig from '../config/api';

export const START_REQUEST = 'START_REQUEST';
export const FINISH_REQUEST_SUCCESS = 'FINISH_REQUEST_SUCCESS';
export const FINISH_REQUEST_FAILURE = 'FINISH_REQUEST_FAILURE';
export const UPDATE_KEYWORD = 'UPDATE_KEYWORD';
export const UPDATE_CANCEL_TOKEN_SOURCE = 'UPDATE_CANCEL_TOKEN_SOURCE';

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

export const updateCancelTokenSource = cancelTokenSource => ({
  type: UPDATE_CANCEL_TOKEN_SOURCE,
  payload: {
    cancelTokenSource: cancelTokenSource,
  },
});

export const update = keyword => {
  return async (dispatch, getState) => {
    // update url
    let search = '';
    if (keyword !== '') {
      search = `?keyword=${keyword}`;
    }
    history.replace({
      search: search,
    });

    // update keyword state
    dispatch(updateKeyword(keyword));

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
        `http://${apiConfig.host}:${apiConfig.port}${
          apiConfig.shops
        }?keyword=${keyword}`,
        {
          cancelToken: source.token,
        }
      );
      dispatch(finishRequestSuccess(response.data));
    } catch (error) {
      dispatch(finishRequestFailure(error));
    }
  };
};
