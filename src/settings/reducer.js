export default function reducer(state, action) {
  switch (action.type) {
    case "SET_COUNTRY_LIST": {
      return { ...state, countryList: action.payload };
    }
    case "FILTER_BY_REGION": {
      const regionSelected = action.payload;

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
      let list;
      if (state.filterByRegion !== "") {
        list = state.countryFilterByRegion;
      } else {
        list = state.countryList;
      }
      const countryListByName = list.filter((country) =>
        country.name.toLowerCase().includes(action.payload.toLowerCase())
      );

      return { ...state, countryListByName };
    }
    default: {
      return state;
    }
  }
}
