import { REQUEST, SUCCESS, FAILURE } from "./userTypes";
import axios from "axios";

const userRequest = () => ({
  type: REQUEST,
});

const userSuccess = (users) => ({
  type: SUCCESS,
  payload: users,
});

const userFailure = (users) => ({
  type: FAILURE,
  payload: users,
});

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(userRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(userSuccess(users));
      })
      .catch((error) => {
        dispatch(userFailure(error.message));
      });
  };
};
