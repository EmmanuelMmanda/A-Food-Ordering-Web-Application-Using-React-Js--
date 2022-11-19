import React from "react";

const CardStyles = {
  padding: "20px",
  marginTop: "70px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const CardItem = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
  gap: "2.5rem",
};

const Card = (props) => {
  return (
    <div style={CardStyles}>
      <div style={CardItem}>{props.children}</div>
    </div>
  );
};

export default Card;
