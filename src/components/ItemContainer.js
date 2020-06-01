import React from "react";
import { connect } from "react-redux";
import { buyCake } from "./redux/cake/cakeActions";
import { buyIcecream } from "./redux/iceCream/icecreamActions";

function ItemContainer(props) {
  return (
    <div>
      <h3>Icecream or Cake - {props.itemCount}</h3>
      <button onClick={props.itemDispatch}>Buy Item</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake ? state.cake.numOfCakes : state.icecream.numOfIcecream;
  return {
    itemCount: itemState
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const itemAction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIcecream());
  return {
    itemDispatch: itemAction
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
