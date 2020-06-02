import { INCREMENT, DECREMENT } from "./counterTypes";

export const incrementCounter = () => ({
  type: INCREMENT
});

export const decrementCounter = () => ({
  type: DECREMENT
});
