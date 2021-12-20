import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../ui/Button";
import Container from "../container/Container";

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
      <Container>
        <div className="row justify align">
          <div className="col">
            <h1>{title}</h1>
          </div>
          <div className="col">
            {pathname !== "/main" && (
              <Button className="button" onClick={handleClick}>
                Перейти к родительскому узлу
              </Button>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}
