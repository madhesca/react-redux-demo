// import { BUY_CAKE } from "./cakeTypes";

// const intialState = {
//   numOfCake: 10
// };

// const cakeReducer = (state = intialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCake: state.numOfCake - 1
//       };
//     default:
//       return state;
//   }
// };

// export default cakeReducer;

import { BUY_CAKE } from "./cakeTypes";

const initialCake = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialCake, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

export default cakeReducer;
