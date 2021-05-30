// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SvgToggle } from "bootstrap-icons/icons/arrow-clockwise.svg";

const NotFoundPage = () => {
  return (
    <div className="m-auto text-center text-dark">
      Désolé, ce gradient n'existe pas.
      <Link
        className="btn btn-light text-dark nav-link m-3"
        to={`/gradient/${1}`}
        // onClick={() => setRestart(1)}
        aria-label="recommencer"
      >
        <SvgToggle />
      </Link>
    </div>
  );
};

export default NotFoundPage;
