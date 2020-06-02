import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIcecream } from "./redux/iceCream/icecreamActions";

function IcecreamContainer() {
  const icecreamCount = useSelector((state) => state.icecream.numOfIcecream);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(2);
  return (
    <div>
      <h2>Icecream - {icecreamCount}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyIcecream(number))}>
        Buy IceCream
      </button>
    </div>
  );
}

export default IcecreamContainer;
