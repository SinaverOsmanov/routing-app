import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import BreadCrumbs from "./components/breadcrumbs/BreadCrumbs";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import { useRouteState } from "./hooks/useRouteState";

export default function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [state] = useRouteState(pathname);

  const theme = state && state.nodes.length === 0 ? "facebook" : "whatsApp";

  useEffect(() => {
    dispatch({
      type: "set",
      payload: pathname,
    });
  }, [dispatch]);

  return (
    <div className={`app ${theme} col`}>
      <Header title={state && state.title} />
      <BreadCrumbs />
      <Content state={state} />
    </div>
  );
}
