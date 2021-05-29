import React, { useState } from "react";
import { useParams } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { useFilter } from "../context/FilterContext";
import { ReactComponent as Next } from "bootstrap-icons/icons/arrow-right.svg";
import { ReactComponent as Prev } from "bootstrap-icons/icons/arrow-left.svg";
import { ReactComponent as SvgToggle } from "bootstrap-icons/icons/arrow-clockwise.svg";

const GradientFullPage = () => {
  const params = useParams();
  const { id } = params;
  const { data } = useFilter();
  const [pickId, setPickId] = useState(id);
  const length = data.length;

  console.log("GradientFullPage");
  console.log(id);
  console.log(pickId);

  let style =
    pickId <= length
      ? {
          backgroundImage: `linear-gradient(to right, ${
            data[Number(pickId) - 1].start
          }, ${data[Number(pickId) - 1].end})`,
        }
      : { background: "Grey" };
  return (
    <div className="flex-fill d-flex" style={style}>
      <nav className="fixed-top nav m-4">
        <li className="nav-item">
          <NavLink className="btn btn-light text-dark nav-link me-2" to="/">
            Tous
          </NavLink>
        </li>
      </nav>
      {pickId > length ? (
        <div className="m-auto text-center">
          Désolé, ce gradient n'existe pas.
          <Link
            className="btn btn-light text-dark nav-link m-3"
            to={`/gradient/${1}`}
            onClick={() => setPickId(1)}
          >
            <SvgToggle />
          </Link>
        </div>
      ) : (
        <div className="m-auto text-center">
          <h1 className="text-light display-1">
            {`${data[Number(pickId) - 1].name}`}
          </h1>
          <div className="bg-white shadow p-2 rounded">
            <code>
              background-image: linear-gradient(to right,
              {`${data[Number(pickId) - 1].start},
              ${data[Number(pickId) - 1].end}`}
              );
            </code>
          </div>
          <nav className="nav m-4 d-flex justify-content-center">
            {pickId > 1 && (
              <li className="nav-item">
                <NavLink
                  className="btn btn-light text-dark nav-link me-2"
                  onClick={() => setPickId(Number(pickId) - 1)}
                  to={`/gradient/${Number(pickId) - 1}`}
                >
                  <Prev />
                </NavLink>
              </li>
            )}
            {pickId <= length - 1 && (
              <li className="nav-item">
                <NavLink
                  className="btn btn-light text-dark  nav-link"
                  to={`/gradient/${Number(pickId) + 1}`}
                  onClick={() => setPickId(Number(pickId) + 1)}
                >
                  <Next />
                </NavLink>
              </li>
            )}
          </nav>
        </div>
      )}
    </div>
  );
};

export default GradientFullPage;