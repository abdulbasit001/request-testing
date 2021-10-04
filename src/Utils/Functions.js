import { api_key } from "./Constants";
import {
  fetchNewsFailureAction,
  fetchNewsRequestAction,
  fetchNewsSuccessAction,
} from "../Store/Actions/Action";
import { axiosInstance } from "../Axios";
export const FetchData = (url, dispatch, keyName = "") => {
  dispatch(fetchNewsRequestAction());
  axiosInstance
    .get(`${url}apiKey=${api_key}`)
    .then((response) => {
      dispatch(fetchNewsSuccessAction(response.data[`${keyName}`]));
    })
    .catch((error) => {
      dispatch(fetchNewsFailureAction(error.response.data.message));
    });
};
