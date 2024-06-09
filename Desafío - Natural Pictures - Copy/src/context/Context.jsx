import { createContext, useState, useEffect } from "react";

export const Context = createContext();

export default function ContextProvider({ children }) {
  const [fotos, setFotos] = useState([]);

  const handleFavorites = (foto) => {
    const updatedFotos = fotos.map((f) =>
      f.id === foto.id ? { ...f, liked: !f.liked } : f
    );
    setFotos(updatedFotos);
  };

  useEffect(() => {
    fetch("/photos.json")
      .then((res) => res.json())
      .then((json) => setFotos(json.photos))
      .catch((e) => console.log(e));
  }, []);

  const globalState = { fotos, setFotos, handleFavorites };

  return <Context.Provider value={globalState}>{children}</Context.Provider>;
}
