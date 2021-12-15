import React from "react";
import { useSelector } from "react-redux";

function App() {
  const route = useSelector((state) => state.route);
  console.log(route);
  return (
    <div className="App">
      <header className="App-header">start</header>
    </div>
  );
}

export default App;
