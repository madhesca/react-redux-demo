// import React from "react";
// import { connect } from "react-redux";
// import { buyIcecream } from "./redux/iceCream/icecreamActions";

// function IcecreamContainer(props) {
//   return (
//     <div>
//       <h4>Icecream - {props.numOfIcecream}</h4>
//       <button onClick={props.buyIcream}>Buy Icecream</button>
//     </div>
//   );
// }

// const mapStateToProps = state => ({
//   numOfIcecream: state.icecream.numOfIcecream
// });

// const mapDispatchToProps = dispatch => ({
//   buyIcream: () => dispatch(buyIcecream())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);

import React from "react";
import { connect } from "react-redux";
import { buyIcecream } from "./redux/iceCream/icecreamActions";

function IcecreamContainer({ icecreamCounter, lessIcecream }) {
  return (
    <div>
      <h2>Icecream - {icecreamCounter}</h2>
      <button onClick={lessIcecream}>Buy IceCream</button>
    </div>
  );
}

const mapStateToProps = ({ icecream: { numOfIcecream } }) => ({
  icecreamCounter: numOfIcecream,
});

const mapDispatchToProps = (dispatch) => ({
  lessIcecream: () => dispatch(buyIcecream()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);
