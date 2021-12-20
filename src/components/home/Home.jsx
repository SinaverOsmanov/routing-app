import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home row">
      <div className="col align">
        <div className="row">
          <h1>Добро пожаловать на тестовое задание</h1>
        </div>
        <div className="row">
          <p>
            нажмите
            <Link to="/main">
              <span style={{ color: "#3b5998" }}> Войти в приложение</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
