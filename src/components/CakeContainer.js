import React from "react";
import { connect } from "react-redux";
import buyCake from "./redux/cake/cakeActions";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cake - {props.cakeCount} </h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = state => ({
  cakeCount: state.cake.numOfCake
});

const mapDispatchToProps = dispatch => ({
  buyCake: () => dispatch(buyCake())
});

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
