import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <h1>
      Такого пути нет, вернуться{" "}
      <Link to="/main">
        <span style={{ color: "#3b5998" }}>на главную страницу</span>
      </Link>
    </h1>
  );
}
