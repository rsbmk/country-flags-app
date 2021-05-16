import "./App.css";
import Header from "./componets/Header";
import Main from "./componets/Main";
import StaticContext from "./Context/StaticContext";
import { useGetDataApi } from "./hooks/useGetDataApi.js";

function App() {
  /* llamamos la api */
  const { country } = useGetDataApi();

  return (
    /* guardamos los datos de la API en el context */
    <StaticContext.Provider
      value={{
        countryList: country,
      }}
    >
      <div className="App">
        <header className="App-header">
          <Header />
          <Main />
        </header>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
