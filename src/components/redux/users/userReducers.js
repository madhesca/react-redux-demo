import { REQUEST, SUCCESS, FAILURE } from "./userTypes";

const initialState = {
  loading: false,
  users: [],
  errors: "",
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        errors: "",
      };
    case FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default userReducers;
