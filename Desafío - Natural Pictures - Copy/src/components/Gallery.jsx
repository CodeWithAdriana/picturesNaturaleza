import "../assets/css/gallery.css";
import IconHeart from "./IconHeart";
import { useContext } from "react";
import { Context } from "../context/Context";

const Gallery = () => {
  const { fotos, handleFavorites } = useContext(Context);

  if (!fotos) {
    return <div>Loading...</div>;
  }

  return (
    <div className="gallery grid-columns-5 p-3">
      {fotos.map((foto, index) => (
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

export default Gallery;
