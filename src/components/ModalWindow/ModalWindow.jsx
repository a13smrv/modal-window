import React from "react";
import "./ModalWindow.scss";
import crossSVG from "./../../media/cross.svg";

export function ModalWindow() {
  return (
    <div className="modalWindow">
      <div className="titleBar">
        <div className="closeButton">
          <img className="cross" src={crossSVG} alt="cross" />
        </div>
      </div>
      <div className="body">

      </div>
    </div>
  )
}