import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../ui/Button";

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
    <header className="header row">
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        {pathname !== "/main" && (
          <Button className="button" onClick={handleClick}>
            Перейти к родительскому узлу
          </Button>
        )}
      </div>
    </header>
  );
}
