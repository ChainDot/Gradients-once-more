import React from "react";
import Gradients from "./Gradients";
import GradientsHeader from "./GradientsHeader";

const GradientsMain = () => {
  return (
    <div>
      <GradientsHeader>
        <h1 className="display-1">Alyra Gradients</h1>
        <p className="tagline">Ultime collection de plus beaux dégradés</p>
      </GradientsHeader>
      <main className="container">
        <h1 className="text-center my-4">Alyra Gradients</h1>
        <Gradients />
      </main>
    </div>
  );
};

export default GradientsMain;
