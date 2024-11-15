import "./index.css";
import Card from "../Card";
import axios from "axios";
import { useState, useEffect } from "react";

const Characters = (props) => {
  // utilisons un state pour stocker les données reçues
  // nous en aurons besoin pour rafraichir la page quand les données seront reçues
  const [data, setData] = useState(null);

  // pour éviter de créer une boucle infinie de rafraichissement à cause du setState, nous devons faire l'appel de données dans un useEffect sans dépendance, afin qu'il ne s'execute qu'une seule fois, au montage du composant
  useEffect(() => {
    // on définit une fonction asynchrone ici car useEffect ne peut pas prendre en entrée une fonction asynchrone
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://hp-api.herokuapp.com/api/characters"
        );
        console.log("response", response);

        // On peut aussi forcer à aller dans le "catch" dans le cas ou on veut forcer une erreur
        // par exemple, nous voudrions aller dans l'erreur si la longueur du tableau de réponse était trop longue
        // if (response.data.length > 100) {
        //   throw new Error("il y a eu trop de resulstats");
        // }
        // mise à jour du state avec les data, cela va déclencher un rafraichissement du component
        setData(response.data);

        console.log(response.data.length);
      } catch (error) {
        console.log(error);
        alert("désolé, il y a eu une erreur pendant l'appel de données");
      }
    };

    // Execution de fetchData
    fetchData();
  }, []);

  return (
    <div className="CharactersContainer">
      {/* Nous devons ici utiliser une Ternaire car if n'est pas accessible dans du JSX. 
      Ici, si data existe (une fois qu'il a été mis à jour dans le useeffect, alors dérouler dans une liste .map) Mais si il est Null (au montage du component quand l'appel de data est en cours, afficher un message "en attente", ou une roue d'attente)
      */}

      {data ? (
        data.splice(0, 10).map((character, i) => {
          return <Card character={character} key={i} />;
        })
      ) : (
        <div>En attente</div>
      )}
    </div>
  );
};

export default Characters;
