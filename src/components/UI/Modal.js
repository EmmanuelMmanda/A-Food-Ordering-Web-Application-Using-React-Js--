import React from "react";
import { createPortal } from "react-dom";
import { Fragment } from "react";
import styles from "./Modal.module.css";

const Full_Modal = {
  Width: "100%",
  height: "100%",
  position: "absolute",
  top: "0",
  left: "0",
  zIndex: "100",
  transition: "all 2s ease",
};
const Backdrop_Styles = {
  backgroundColor: "var(--backdrop)",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  position: "fixed",
  top: 0,
  left: 0,
};

const Modal_Header = {
  width: "100%",
  height: "30px",
  marginBottom: "10px",
  fontWeight: "bold",
  borderBottom: "1px solid var(--border-Color)",
};

const Modal_Body = {
  height: "auto",
  width: "100%",

};

const Modal_Footer = {
  height: "auto",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "10px",
};

const Accept_Button = {
  backgroundColor: "var(--greenAccent)",
  padding: "10px 20px",
  color: "#eee",
  cursor: "pointer",
  border: "none",
  outline: "none",
};

const Close_Button = {
  backgroundColor: "var(--redAccent)",
  color: "#eee",
  padding: "10px 20px",
  cursor: "pointer",
  border: "none",
  outline: "none",
};

const Modal = (props) => {
  const ModalElem = () => {
    return (
      <div style={Full_Modal}>
        <div style={Backdrop_Styles} onClick={props.onClose}></div>
        <div className={styles.Modal_container}>
          <div style={Modal_Header}>{props.title}</div>
          <div style={Modal_Body}>{props.children}</div>
          <div style={Modal_Footer}>
            {props.AcceptText.trim() && (
              <button style={Accept_Button} onClick={props.onAccept}>
                {props.AcceptText}
              </button>
            )}

            <button style={Close_Button} onClick={props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      {createPortal(ModalElem(), document.getElementById("modal-container"))}
    </Fragment>
  );
};

export default Modal;
