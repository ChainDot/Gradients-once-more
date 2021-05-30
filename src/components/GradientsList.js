import { useFilter } from "../context/FilterContext";
import Gradient from "./Gradient";

const GradientsList = () => {
  const { state } = useFilter();
  // console.log("GradientsList");
  // console.log(data);

  const list = state.data.filter((el) => {
    if (state.filter === "all") {
      return true;
    }
    return el.tags.includes(state.filter);
  });
  return (
    <ul className="row list-unstyled">
      {list.map((el) => {
        const { name, start, end, tags, id = [] } = el;
        return (
          <Gradient
            key={id}
            colorStart={start}
            colorEnd={end}
            name={name}
            tags={tags}
            id={id}
          />
        );
      })}
    </ul>
  );
};

export default GradientsList;
