import { useState } from "react";

import { ReactComponent as SvgToggle } from "bootstrap-icons/icons/arrow-clockwise.svg";
import { ReactComponent as Next } from "bootstrap-icons/icons/arrow-right.svg";
import { ReactComponent as Prev } from "bootstrap-icons/icons/arrow-left.svg";
import { useFilter } from "../context/FilterContext";

const GradientsHeader = (props) => {
  const { children } = props;
  const { state } = useFilter();
  const length = state.data.length;
  // console.log("GradientsHeader");
  // console.log(data);

  const chooseGradient = () => {
    let result = Math.floor(Math.random() * length);
    return result;
  };

  const [randomGradient, setRandomGradient] = useState(chooseGradient);
  const handleReloadClick = () => {
    setRandomGradient(chooseGradient);
  };
  const handleNextClick = () => {
    setRandomGradient(randomGradient === length - 1 ? 0 : randomGradient + 1);
  };
  const handlePrevClick = () => {
    setRandomGradient(randomGradient === 0 ? length - 1 : randomGradient - 1);
  };

  let style = state.data
    ? {
        backgroundImage: `linear-gradient(to right, ${state.data[randomGradient]?.start}, ${state.data[randomGradient]?.end})`,
      }
    : { background: "grey" };
  return (
    <header className="text-center bg-dark text-white py-5 mb-5" style={style}>
      {children}
      <button
        aria-label="Clicker pour afficher le dégradé précédant"
        type="button"
        className="btn btn-outline-light m-1"
        onClick={handlePrevClick}
      >
        <Prev />
      </button>
      <button
        aria-label="Clicker pour changer le dégradé"
        type="button"
        className="btn btn-outline-light m-1"
        onClick={handleReloadClick}
      >
        <SvgToggle />
      </button>
      <button
        aria-label="Clicker pour afficher le dégradé suivant"
        type="button"
        className="btn btn-outline-light m-1"
        onClick={handleNextClick}
      >
        <Next />
      </button>
    </header>
  );
};

export default GradientsHeader;
