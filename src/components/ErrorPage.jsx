import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <h1>
      Такого пути нет, вернуться <Link to="/main">на главную страницу</Link>
    </h1>
  );
}
