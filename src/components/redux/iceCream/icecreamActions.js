import { BUY_ICECREAM } from "./icecreamTypes";

export const buyIcecream = (number = 3) => ({
  type: BUY_ICECREAM,
  payload: number
});
