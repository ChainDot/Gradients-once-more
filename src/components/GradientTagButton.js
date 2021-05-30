import { useFilter } from "../context/FilterContext";

const GradientTagButton = ({ tag }) => {
  const { state, dispatch } = useFilter();
  const className = state.filter === tag ? "bg-light" : "bg-dark text-white";
  return (
    <button
      type="button"
      className={`btn btn-sm me-2 mb-2 ${className}`}
      disabled={state.filter === tag}
      onClick={() => dispatch({ type: "SET_FILTER", payload: tag })}
    >
      {tag}
    </button>
  );
};

export default GradientTagButton;
