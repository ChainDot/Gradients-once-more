import { createContext, useContext, useEffect, useState } from "react";

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const [filter, setFilter] = useState("all");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const url = "https://gradients-api.herokuapp.com/gradients/";

  useEffect(() => {
    setLoading(true);
    fetch(url, { method: "GET" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Something went wrong, status : ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // console.log("fecthed data");
        // console.log(data);
        setLoading(false);
        setData(data);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <FilterContext.Provider
      value={{
        filter,
        setFilter,
        data,
        setData,
        loading,
        error,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error(`You try to use FilterContext outside of its provider.`);
  }
  return context;
};
