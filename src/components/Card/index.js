import { useState } from "react";
import "./index.css";
import Modale from "../Modal";
const Card = ({ character }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="card"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <img src={character.image} />
        <span className="legend"> {character.name} </span>
      </div>
      {isOpen && <Modale character={character} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Card;
