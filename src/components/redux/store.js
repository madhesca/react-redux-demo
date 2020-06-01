// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "./rootReducer";
// import logger from "redux-logger";
// import { composeWithDevTools } from "redux-devtools-extension";

// const middleware = [logger];

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

// export default store;

import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";

const middleware = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
