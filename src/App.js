import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import NodeForm from "./components/NodeForm";
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import BreadCrumbs from "./components/BreadCrumbs";
import NodeList from "./components/NodeList";
import Header from "./components/Header";
import { useRouteState } from "./hooks/useRouteState";
import Home from "./components/Home";

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [state] = useRouteState(pathname);
  console.log(!state);

  useEffect(() => {
    dispatch({
      type: "set",
      payload: pathname,
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        {state ? (
          <Route path={pathname} element={<RouteComponent state={state} />} />
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;

function RouteComponent({ state }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onSubmitForm(form) {
    navigate(pathname + form.route);
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
      Такого пути нет, вернуться <Link to="/">на главную страницу</Link>
    </h1>
  );
}
