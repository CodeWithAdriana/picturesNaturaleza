import { useContext } from "react";
import { Context } from "../context/Context";
import "../assets/css/gallery.css";
import IconHeart from "../components/IconHeart";

const Favorites = () => {
  const { fotos, handleFavorites } = useContext(Context);

  const favoriteFotos = fotos.filter((foto) => foto.liked);

  if (favoriteFotos.length === 0) {
    return <div>No hay fotos favoritas</div>;
  }

  return (
    <div className="gallery grid-columns-5 p-3">
      {favoriteFotos.map((foto, index) => (
        <div
          key={foto.id}
          className="foto"
          onClick={() => handleFavorites(foto)}
          style={{ backgroundImage: `url(${foto.src.portrait})` }}
        >
          <IconHeart filled={foto.liked} index={index} />
          <p>{foto.alt}</p>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
