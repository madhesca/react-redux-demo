import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "./redux/cake/cakeActions";
import { buyIcecream } from "./redux/iceCream/icecreamActions";

function ItemContainer({ itemCount, less }) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <span>
        Icecream or Cake <h2>{itemCount}</h2>
      </span>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => less(number)}>Less Me</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const ItemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.icecream.numOfIcecream;
  return {
    itemCount: ItemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const itemLess = ownProps.cake
    ? (number) => dispatch(buyCake(number))
    : (number) => dispatch(buyIcecream(number));
  return {
    less: itemLess,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
