import GradientTitle from "./GradientTitle";
import GradientPill from "./GradientPill";
import GradientCode from "./GradientCode";
import GradientTags from "./GradientTags";
import { NavLink } from "react-router-dom";

const Gradient = ({ colorStart, colorEnd, name, tags, id }) => {
  return (
    <li className="col-lg-3 col-md-4 col-sm-6">
      <div className="card p-3 mb-4 shadow">
        <GradientPill colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTitle>{name}</GradientTitle>
        <GradientCode colorStart={colorStart} colorEnd={colorEnd} />
        <GradientTags tags={tags} />
        <NavLink
          to={`gradient/${id}`}
          className="btn btn-outline-dark w-100 me-2 mb-2"
        >
          Plein ecran
        </NavLink>
      </div>
    </li>
  );
};

export default Gradient;
