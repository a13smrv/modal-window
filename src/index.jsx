import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./components/Button/Button";

import "./index.scss";

function App() {
  return (
    <div className="app">
      <Button />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);