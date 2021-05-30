import { createContext, useContext, useEffect, useReducer } from "react";
import { useIsMounted } from "../hooks/useIsMounted";
import GradientsReducer from "../reducer/GradientsReducer";

export const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  // const [filter, setFilter] = useState("all")
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("")
  const url = "https://gradients-api.herokuapp.com/gradients/";

  const initialData = {
    data: [],
    loading: false,
    error: "",
    filter: "all",
  };

  const [state, dispatch] = useReducer(GradientsReducer, initialData);
  const isMounted = useIsMounted();

  useEffect(() => {
    // setLoading(true);
    dispatch({ type: "FETCH_INIT" });
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
        // setLoading(false);
        // setData(data);
        if (isMounted.current) {
          dispatch({ type: "FETCH_SUCCESS", payload: data });
        }
      })
      .catch((error) => {
        // setError(error.message);
        // setLoading(false);
        if (isMounted.current) {
          dispatch({ type: "FETCH_FAILURE", payload: error.message });
        }
      });
  }, [isMounted]);

  return (
    <FilterContext.Provider
      value={{
        state,
        dispatch,
        // data,
        // loading,
        // error,
      }}
    >
      {state.error ? (
        <p
          className="alert alert-danger 
        text-center m-5"
        >
          {state.error}
        </p>
      ) : state.loading ? (
        <div
          className="alert alert-primary
        text-center m-5"
        >
          loading...
        </div>
      ) : (
        children
      )}
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
