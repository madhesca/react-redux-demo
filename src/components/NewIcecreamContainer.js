import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIcecream } from "./redux/iceCream/icecreamActions";

function NewIcecreamContainer() {
  const [number, setNumber] = useState(2);
  const iceCreamCount = useSelector(state => state.icecream.numOfIcecream);
  const dispatch = useDispatch(number);
  return (
    <div>
      <h3>Icecream - {iceCreamCount} </h3>
      <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={() => dispatch(buyIcecream(number))}>IceCream</button>
    </div>
  );
}

export default NewIcecreamContainer;
