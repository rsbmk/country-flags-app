import "./App.css";
import Header from "./componets/Header";
import Main from "./componets/Main";
import DetailCountry from "./componets/DetailCountry";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./settings/reducer";
import { initialState } from "./settings/initialState";

import { Route } from "wouter";

function App() {
  const store = createStore(reducer, initialState);

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Route path="/country/:name" component={DetailCountry} />
        <Route path="/country-flags-app/" component={Main} />
      </div>
    </Provider>
  );
}

export default App;
