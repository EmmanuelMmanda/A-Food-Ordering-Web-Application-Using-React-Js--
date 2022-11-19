import React from "react";
import { createPortal } from "react-dom";
import { Fragment } from "react";

const Full_Modal = {
  width: "100%",
  height: "100%",
  position: "absolute",
  top: "0",
  left: "0",
  zIndex: "100",
};
const Backdrop_Styles = {
  backgroundColor: "var(--backdrop)",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
  position: "fixed",
  top: 0,
  left: 0,
};

const Modal_Container = {
  position: "absolute",
  padding: "10px",
  borderRadius: "5px",
  backgroundColor: "var(--Modal)",
  width: "430px",
  top: "10%",
  left: "35%",
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
        <div style={Modal_Container}>
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
