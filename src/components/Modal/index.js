import "./index.css";

const Modale = ({ character, setIsOpen }) => {
  return (
    <div
      className="modale"
      onClick={() => {
        setIsOpen(false);
      }}
    >
      <img src={character.image} />
      <div>Nom : {character.name}</div>
      <div>Patronus :{character.patronus}</div>
      <div>Maison :{character.house}</div>
    </div>
  );
};

export default Modale;
