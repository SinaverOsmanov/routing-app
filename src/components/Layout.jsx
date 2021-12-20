import BreadCrumbs from "./breadcrumbs/BreadCrumbs";
import Content from "./content/Content";
import Header from "./header/Header";

export function Layout({ state }) {
  return (
    <>
      {state && (
        <>
          <Header title={state.title} />
          <BreadCrumbs />
        </>
      )}
      <Content state={state && state} />
    </>
  );
}
