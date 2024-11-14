import { useState } from "react";
import "./index.css";
const Card = ({ character }) => {
  return (
    <>
      <div className="card">
        <img src={character.image} />
        <span className="legend"> {character.name} </span>
      </div>
    </>
  );
};

export default Card;
