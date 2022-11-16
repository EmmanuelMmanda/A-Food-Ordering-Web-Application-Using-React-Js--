import React from "react";
import { Fragment } from "react";
const Input = (props) => {
  return (
    <Fragment>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </Fragment>
  );
};

export default Input;
