// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import buyCake from "./redux/cake/cakeActions";

// function HookCakeContainer() {
//   const numOfCake = useSelector(state => state.cake.numOfCake);
//   const dispactch = useDispatch();

//   return (
//     <div>
//       <h3>Num of Cake - {numOfCake} </h3>
//       <button onClick={() => dispactch(buyCake())}>BuyMe</button>
//     </div>
//   );
// }

// export default HookCakeContainer;

import { buyCake } from "./redux/cake/cakeActions";
import { useSelector, useDispatch } from "react-redux";

import React from "react";

function HookCakeContainer() {
  const cakeCount = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Hook Cake - {cakeCount}</h3>
      <button onClick={() => dispatch(buyCake())}>Hook Cake</button>
    </div>
  );
}

export default HookCakeContainer;
