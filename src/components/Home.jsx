import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Добро пожаловать на тестовое задание</h1>
      <p>
        нажмите <Link to="/main">Войти</Link> в приложение
      </p>
    </div>
  );
}
