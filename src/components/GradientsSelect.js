import { useFilter } from "../context/FilterContext";
import { allTags } from "../gradients";

const GradientsSelect = () => {
  const { state, dispatch } = useFilter();
  // console.log("Gradient Select");
  // console.log(data);
  // console.log(filter);
  const handleSelectChange = (e) => {
    dispatch({ type: "SET_FILTER", payload: e.target.value });
  };
  return (
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor="select">
        Filtrer par tag
      </label>
      <select
        className="form-select"
        id="select"
        value={state.filter}
        onChange={handleSelectChange}
      >
        <option value="all">Tous</option>
        {allTags(state.data).map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GradientsSelect;
