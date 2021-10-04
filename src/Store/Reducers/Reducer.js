import {
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
} from "../StoreConstants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};
export const FetchNews = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_NEWS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_NEWS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
  }
  return state;
};
