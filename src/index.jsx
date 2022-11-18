import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./components/Button/Button";
import { ModalWindow } from "./components/ModalWindow/ModalWindow";

import "./index.scss";

function App() {
  return (
    <div className="app">
      {/* <Button /> */}
      <ModalWindow />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);