// // import { combineReducers } from "redux";
// // import cakeReducer from "./cake/cakeReducer";

// // import icecreamReducer from "./iceCream/icecreamReducer";

// // export default combineReducers({
// //   cake: cakeReducer,
// //   icecream: icecreamReducer
// // });

// import cakeReducer from "./cake/cakeReducer";
// import { combineReducers } from "redux";
// import icecreamReducer from "./iceCream/icecreamReducer";

// export default combineReducers({
//   cake: cakeReducer,
//   icecream: icecreamReducer,
// });

import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import icecreamReducer from "./iceCream/icecreamReducer";
import userReducers from "./users/userReducers";
export default combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  users: userReducers,
});
