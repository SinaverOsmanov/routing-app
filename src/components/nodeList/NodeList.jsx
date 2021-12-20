import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NodeList({ nodes }) {
  const location = useLocation();
  return (
    <>
      <div className="row">
        <h3>Список узлов</h3>
      </div>
      <div className="row list">
        <ul>
          {nodes.length ? (
            nodes.map((node) => (
              <li key={node.route}>
                <Link
                  to={`${
                    location.pathname !== "/"
                      ? location.pathname + node.route
                      : node.route
                  }`}
                >
                  <span>{node.title}</span>
                </Link>
              </li>
            ))
          ) : (
            <div>Список пуст</div>
          )}
        </ul>
      </div>
    </>
  );
}
