import React from "react";
import NodeComponent from "./NodeComponent";
import Home from "./home/Home";
import ErrorPage from "./ErrorPage";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function RoutesComponent({ state }) {
  const { pathname } = useLocation();

  return (
    <>
      <Routes>
        {state ? (
          <Route path={pathname} element={<NodeComponent state={state} />} />
        ) : (
          <>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<Home />} />
          </>
        )}
      </Routes>
    </>
  );
}
