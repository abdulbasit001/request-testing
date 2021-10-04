import {
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
} from "../StoreConstants";

export const fetchNewsRequestAction = () => {
  return {
    type: FETCH_NEWS_REQUEST,
  };
};

export const fetchNewsSuccessAction = (data) => {
  return {
    type: FETCH_NEWS_SUCCESS,
    payload: data,
  };
};

export const fetchNewsFailureAction = (error) => {
  return {
    type: FETCH_NEWS_FAILURE,
    payload: error,
  };
};
