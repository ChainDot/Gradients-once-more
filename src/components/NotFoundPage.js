// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SvgToggle } from "bootstrap-icons/icons/arrow-clockwise.svg";

const NotFoundPage = () => {
  return (
    <div
      className="flex-fill d-flex fs-2 text-light fw-bold"
      style={{ background: "black" }}
    >
      <div className="m-auto text-center">
        Erreur 404
        <Link
          className="btn btn-light text-dark  nav-link m-3"
          to={`/`}
          // onClick={() => setRestart(1)}
          aria-label="recommencer"
        >
          <SvgToggle />
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
