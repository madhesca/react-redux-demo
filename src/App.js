import React from "react";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import CakeContainer from "./components/CakeContainer";
import HookCakeContainer from "./components/HookCakeContainer";
import IcecreamContainer from "./components/IcecreamContainer";
import HookIcecreamContainer from "./components/HookIcecreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div>
        <HookIcecreamContainer />
        <IcecreamContainer />
        <HookCakeContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
