// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SvgToggle } from "bootstrap-icons/icons/arrow-clockwise.svg";

const NotFoundPage = () => {
  return (
    <div className="m-auto text-center">
      Erreur 404
      <Link
        className="btn btn-dark  nav-link m-3"
        to={`/`}
        // onClick={() => setRestart(1)}
        aria-label="recommencer"
      >
        <SvgToggle />
      </Link>
    </div>
  );
};

export default NotFoundPage;
