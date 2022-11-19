import React from "react";
import "./ModalWindow.scss";
import crossSVG from "./../../media/cross.svg";

export function ModalWindow(props) {
  return (
    <div className="modalContainer">
      <div className="modalWindow">
        <div className="titleBar">
          <div className="closeButton" onClick={props.onClickCloseButton}>
            <img className="cross" src={crossSVG} alt="cross" />
          </div>
        </div>
        <div className="body">

        </div>
      </div>
    </div>
  )
}