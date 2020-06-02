// import { REQUEST, SUCCESS, FAILURE } from "./userTypes";
// import axios from "axios";

// const userRequest = () => ({
//   type: REQUEST,
// });

// const userSuccess = (users) => ({
//   type: SUCCESS,
//   payload: users,
// });

// const userFailure = (users) => ({
//   type: FAILURE,
//   payload: users,
// });

// export const fetchUsers = () => {
//   return (dispatch) => {
//     dispatch(userRequest);
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         const users = response.data;
//         dispatch(userSuccess(users));
//       })
//       .catch((error) => {
//         dispatch(userFailure(error.message));
//       });
//   };
// };

import { REQUEST, SUCCESS, FAILURE } from "./userTypes";
import axios from "axios";

const userRequest = () => ({
  type: REQUEST
});

const userSuccess = user => ({
  type: SUCCESS,
  payload: user
});

const userFailure = user => ({
  type: FAILURE,
  payload: user
});

export const fetchUsers = () => {
  return dispatch => {
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then(response => {
        const users = response.data;
        dispatch(userSuccess(users));
      })
      .catch(error => {
        dispatch(userFailure(error));
      });
  };
};
