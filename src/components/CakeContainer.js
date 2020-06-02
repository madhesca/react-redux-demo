// import React from "react";
// import { connect } from "react-redux";
// import { buyCake } from "./redux/cake/cakeActions";

// function CakeContainer(props) {
//   return (
//     <div>
//       <h2>Cake Count - {props.cakeCount}</h2>
//       <button onClick={props.lessCake}>Buy Cake</button>
//     </div>
//   );
// }

// const mapStateToProps = state => ({
//   cakeCount: state.cake.numOfCakes
// });

// const mapDispatchToProps = dispatch => ({
//   lessCake: () => dispatch(buyCake())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

import React, { useState } from "react";
import { buyCake } from "./redux/cake/cakeActions";
import { connect } from "react-redux";

function CakeContainer({ lessCake, cakeCount }) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Cake - {cakeCount}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => lessCake(number)}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = ({ cake: { numOfCakes } }) => ({
  cakeCount: numOfCakes,
});

const mapDispatchToProps = (dispatch) => ({
  lessCake: (num) => dispatch(buyCake(num)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
