import React from "react";
import { connect } from "react-redux";
import { buyIcecream } from "./redux/iceCream/icecreamActions";

function IcecreamContainer(props) {
  return (
    <div>
      <h4>Icecream - {props.numOfIcecream}</h4>
      <button onClick={props.buyIcream}>Buy Icecream</button>
    </div>
  );
}

const mapStateToProps = state => ({
  numOfIcecream: state.icecream.numOfIcecream
});

const mapDispatchToProps = dispatch => ({
  buyIcream: () => dispatch(buyIcecream())
});

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);
