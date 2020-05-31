import React from "react";
import { useSelector, useDispatch } from "react-redux";
import buyCake from "./redux/cake/cakeActions";

function HookCakeContainer() {
  const numOfCake = useSelector(state => state.cake.numOfCake);
  const dispactch = useDispatch();

  return (
    <div>
      <h3>Num of Cake - {numOfCake} </h3>
      <button onClick={() => dispactch(buyCake())}>BuyMe</button>
    </div>
  );
}

export default HookCakeContainer;
