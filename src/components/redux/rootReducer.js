import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./iceCream/icecreamReducer";
import userReducers from "./users/userReducers";
import counterReducer from "./counter/counterReducer";

export default combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  users: userReducers,
  counter: counterReducer
});
