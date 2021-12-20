import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import NodeForm from "./nodeForm/NodeForm";
import NodeList from "./nodeList/NodeList";

export default function NodeComponent({ state }) {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  function onSubmitForm(form) {
    dispatch({
      type: "add",
      payload: { form, location: pathname, componentState: state },
    });
  }

  return (
    <div className="row">
      <div className="col" style={{ marginRight: "20px" }}>
        <NodeForm onSubmitForm={onSubmitForm} />
      </div>
      <div className="col">
        <NodeList nodes={state.nodes} />
      </div>
    </div>
  );
}
