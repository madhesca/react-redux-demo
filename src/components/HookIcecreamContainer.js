// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { buyIcecream } from "./redux/iceCream/icecreamActions";

// function HookIcecreamContainer() {
//   const numOfIcecream = useSelector(state => state.icecream.numOfIcecream);
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <h4>Hook Ice Cream {numOfIcecream}</h4>
//       <button onClick={() => dispatch(buyIcecream())}>Buy ME</button>
//     </div>
//   );
// }

// export default HookIcecreamContainer;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIcecream } from "./redux/iceCream/icecreamActions";

function HookIcecreamContainer() {
  const icecreamCounter = useSelector((state) => state.icecream.numOfIcecream);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Icecream - {icecreamCounter} </h3>
      <button onClick={() => dispatch(buyIcecream())}>Buy IceCream</button>
    </div>
  );
}

export default HookIcecreamContainer;
