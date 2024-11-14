import "./index.css";
import Card from "../Card";
import { apiAnswer } from "../../data/fakeData";

const Characters = (props) => {
  // le tableau de data est props.data

  return (
    <div className="CharactersContainer">
      {apiAnswer.map((character) => {
        return <Card character={character} />;
      })}
    </div>
  );
};

export default Characters;
