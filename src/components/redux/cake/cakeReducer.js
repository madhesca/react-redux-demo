import { BUY_CAKE } from "./cakeTypes";

const initialCake = {
  numOfCakes: 10
};

const cakeReducer = (state = initialCake, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload
      };

    default:
      return state;
  }
};

export default cakeReducer;
