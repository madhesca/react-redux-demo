import React from "react";
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import store from "./components/redux/store";
import IcecreamContainer from "./components/IcecreamContainer";
import NewIcecreamContainer from "./components/NewIcecreamContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";
import CounterContainer from "./components/CounterContainer";

function App() {
  return (
    <Provider store={store}>
      <div>
        <CounterContainer />
      </div>
    </Provider>
  );
}

export default App;
