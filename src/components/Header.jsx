import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header({ title }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function handleClick() {
    const splitPathName = pathname.split("/");
    const splicePathName = splitPathName.splice(0, splitPathName.length - 1);
    if (splicePathName.length === 1) {
      navigate("/main");
      return;
    }
    const parentNode = splicePathName.join("/");
    navigate(parentNode);
  }

  return (
    <header>
      <h1>{title}</h1>
      {pathname !== "/main" && (
        <button onClick={handleClick}>Перейти к родительскому узлу</button>
      )}
    </header>
  );
}
