import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Fav.module.css";
import Card from "../Card/Card";
import { deleteFavorites } from "../../redux/actions/actions"; // Importa la acción para eliminar un personaje de los favoritos

export function Favorites({ myFavorites, onDelete }) {
  const navigate = useNavigate();

  const handleCardClose = characterId => {
    onDelete(characterId); // Llama a la función onDelete pasando el ID del personaje
  };

  return (
    <div>
      {myFavorites.map(character =>
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          onClose={handleCardClose} // Pasa la función handleCardClose directamente
        />
      )}
      <div className={styles.buttonBack}>
        <button className={styles.links} onClick={() => navigate("/home")}>
          Pagina Inicio
        </button>
      </div>
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    onDelete: characterId => dispatch(deleteFavorites(characterId)) // Mapea la acción deleteFavorites a la prop onDelete
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
