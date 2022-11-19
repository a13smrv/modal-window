import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button } from "./components/Button/Button";
import { ModalWindow } from "./components/ModalWindow/ModalWindow";

import "./index.scss";

function App() {
  const [openModalWindow, setOpenModalWindow] = useState(false);

  return (
    <div className="app">
      <Button onClick={() => setOpenModalWindow(true)}/>
      { openModalWindow && (<ModalWindow onClickCloseButton={() => setOpenModalWindow(false)} />) }
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);