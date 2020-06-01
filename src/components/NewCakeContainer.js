import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "./redux/cake/cakeActions";

function NewCakeContainer({ cakeCount, lessCake }) {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <h2> New Cake - {cakeCount} </h2>
      <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={() => lessCake(number)}>Buy {number} Cake</button>
    </div>
  );
}

const mapStateToProps = state => ({
  cakeCount: state.cake.numOfCakes
});

const mapDispatchToProps = dispatch => ({
  lessCake: number => dispatch(buyCake(number))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
