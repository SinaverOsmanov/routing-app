import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NodeList({ nodes }) {
  const location = useLocation();
  return (
    <section>
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
                {node.title}
              </Link>
            </li>
          ))
        ) : (
          <li>Список пуст</li>
        )}
      </ul>
    </section>
  );
}
