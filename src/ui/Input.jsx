import React from "react";

export function Input({ children, title, ...props }) {
  return (
    <div className="row" style={{ marginBottom: "10px" }}>
      <div className="col">
        <div className="row" style={{ marginBottom: "5px" }}>
          <label htmlFor={props.id}>{title}</label>
        </div>
        <div className="row">
          <input className="input" {...props} />
        </div>
      </div>
    </div>
  );
}
