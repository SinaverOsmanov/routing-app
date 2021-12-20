import React from "react";
import RoutesComponent from "../RoutesComponent";

export default function Content({ state }) {
  return (
    <section className="content row">
      <RoutesComponent state={state} />
    </section>
  );
}
