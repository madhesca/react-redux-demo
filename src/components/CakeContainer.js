import React from "react";
import { connect } from "react-redux";
import { buyCake } from "./redux/cake/cakeActions";

function CakeContainer(props) {
  return (
    <div>
      <h2>Cake Count - {props.cakeCount}</h2>
      <button onClick={props.lessCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = state => ({
  cakeCount: state.cake.numOfCakes
});

const mapDispatchToProps = dispatch => ({
  lessCake: () => dispatch(buyCake())
});

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
