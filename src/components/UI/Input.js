import { Fragment, forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <Fragment>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        ref={ref}
        className={props.ClassName}
        {...props.input}
        onChange={props.onChange}
      />
    </Fragment>
  );
});

export default Input;
