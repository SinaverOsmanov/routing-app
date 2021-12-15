import React from "react";
import { useSelector } from "react-redux";

function App() {
  const route = useSelector((state) => state.route);
  console.log(route);
  return (
    <div className="routing">
      <header className="routing__header">
        <div className="routing__header_title">Main</div>
        <div className="routing__header_button">
          <button>Перейти к родительскому узлу</button>
        </div>
      </header>
      <div className="routing__content">
        <div className="routing__content_form">
          <form action="">
            <input type="text" />
            <input type="text" />
            <button>Добавить узел</button>
          </form>
        </div>
        <div className="routing__content_list">
          <span>
            <a href="/main">main&gt;</a>
          </span>

          <span>
            <a href="/additional">additional&gt;</a>
          </span>
          <span>
            <a href="/info">info</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
