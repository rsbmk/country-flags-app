import "./App.css";
import Header from "./componets/Header";
import Main from "./componets/Main";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./settings/reducer";
import { initialState } from "./settings/initialState";

function App() {
  const store = createStore(reducer, initialState);

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
