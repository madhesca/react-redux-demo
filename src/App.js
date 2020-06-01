import React from "react";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import CakeContainer from "./components/CakeContainer";
import HookCakeContainer from "./components/HookCakeContainer";
import IcecreamContainer from "./components/IcecreamContainer";
import HookIcecreamContainer from "./components/HookIcecreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import NewIcecreamContainer from "./components/NewIcecreamContainer";
import ItemContainer from "./components/ItemContainer";

function App() {
  return (
    <Provider store={store}>
      <div>
        <NewCakeContainer />
        <CakeContainer />
        <NewIcecreamContainer />
        {/* <HookCakeContainer /> */}
        <IcecreamContainer />
        {/* <HookIcecreamContainer /> */}
        ////////////////
        <ItemContainer />
        <ItemContainer cake />
      </div>
    </Provider>
  );
}

export default App;
