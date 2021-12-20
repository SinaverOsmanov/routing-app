import React from "react";
import Container from "../container/Container";
import RoutesComponent from "../RoutesComponent";

export default function Content({ state }) {
  return (
    <section className="content row">
      <Container>
        <RoutesComponent state={state} />
      </Container>
    </section>
  );
}
