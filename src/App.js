import "./App.css";
import Header from "./componets/Header";
import Main from "./componets/Main";

import { Provider } from "react-redux";
import { createStore } from "redux";

function App() {
  const initialState = {
    countryList: [],
    countryListByName: [],
    countryFilterByRegion: [],
    filterByRegion: "",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "SET_COUNTRY_LIST": {
        return { ...state, countryList: action.payload };
      }
      case "FILTER_BY_REGION": {
        const regionSelected = action.payload;
        console.log(regionSelected);

        if (regionSelected === "") {
          return { ...state, countryFilterByRegion: [], filterByRegion: "" };
        }

        const filteredCountryListByRegion = state.countryList.filter(
          (country) => country.region === regionSelected
        );

        return {
          ...state,
          countryFilterByRegion: filteredCountryListByRegion,
          filterByRegion: regionSelected,
        };
      }
      case "FILTER_BY_NAME": {
        const countryListByName = state.countryList.filter((country) =>
          country.name.toLowerCase().includes(action.payload.toLowerCase())
        );

        return { ...state, countryListByName };
      }
      default: {
        return state;
      }
    }
  }

  const store = createStore(reducer, initialState);

  return (
    /* guardamos los datos de la API en el context */
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Header />
          <Main />
        </header>
      </div>
    </Provider>
  );
}

export default App;
