import { useState } from "react";
import "./index.css";
const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.character.image} />
        <span className="legend"> {props.character.name} </span>
      </div>
    </>
  );
};

export default Card;
