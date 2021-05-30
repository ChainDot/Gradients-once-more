const GradientsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "SET_FILTER":
      return {
        ...state,
        loading: false,
        error: false,
        filter: action.payload,
      };
    default:
      throw new Error(`Unsupported action type ${action.type}`);
  }
};

export default GradientsReducer;
