import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import NodeForm from "./components/NodeForm";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import BreadCrumbs from "./components/BreadCrumbs";
import NodeList from "./components/NodeList";
import Header from "./components/Header";
import { useRouteState } from "./hooks/useRouteState";

function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [state] = useRouteState(pathname);
  useEffect(() => {
    dispatch({
      type: "set",
      payload: pathname,
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        {!state ? (
          <Route path="*" element={<ErrorPage />} />
        ) : (
          <Route path={pathname} element={<RouteComponent state={state} />} />
        )}
      </Routes>
    </div>
  );
}

export default App;

function RouteComponent({ state }) {
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  function onSubmitForm(form) {
    dispatch({
      type: "add",
      payload: { form, location: pathname, componentState: state },
    });
  }

  return (
    <div>
      <Header title={state.title} />
      <BreadCrumbs />
      <NodeForm onSubmitForm={onSubmitForm} />
      <NodeList nodes={state.nodes} />
    </div>
  );
}

function ErrorPage() {
  return (
    <h1>
      Такого пути нет, вернуться <Link to="/">на главную страницу</Link>{" "}
    </h1>
  );
}
