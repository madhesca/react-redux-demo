import React from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./redux/counter/counterActions";

function CounterContainer({ count, increment, decrement }) {
  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Increment</button>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.counter.count
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter())
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
