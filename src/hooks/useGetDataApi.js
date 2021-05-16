import { useEffect, useState } from "react";

export function useGetDataApi() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((Response) => Response.json())
      .then((data) => setCountry(data));
  }, []);

  return { country };
}
