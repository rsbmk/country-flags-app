import { useEffect } from "react";
import { useDispatch } from "react-redux";

export function useFetch(url) {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "SET_COUNTRY_LIST",
          payload: data,
        });
      });
  }, [dispatch, url]);
}
