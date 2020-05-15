import React from "react";
import "./styles.css";

function OneCard(props) {
  //
  return (
    <div className={`card-div ${props.clr}`}>
      <h3 className={`${props.clr}`}>{props.name}</h3>
    </div>
  );
}

export default OneCard;
