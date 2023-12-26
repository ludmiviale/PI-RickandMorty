import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
/* styles */
import "./card.css";

const Card = ({ id, name, gender, image, onClose }) => {
  const [isFav, setIsFav] = useState(false);

  const dispatch = useDispatch();

  const allFavorites = useSelector((state) => state.allFavorites);

  const { pathname } = useLocation();

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav({ id, name, gender, image, onClose }));
    }
  };

  useEffect(() => {
    allFavorites?.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [allFavorites]);

  return (
    <div className="card">
      {isFav ? (
        <button onClick={handleFavorite} className="favTrue"></button>
      ) : (
        <button onClick={handleFavorite} className="favFalse"></button>
      )}

      {pathname !== "/favorites" ? (
        <button
          onClick={() => {
            onClose(id);
          }}
          className="close"
        ></button>
      ) : (
        ""
      )}

      <Link to={`/detail/${id}`}>
        <h1>{name}</h1>
      </Link>
      <img src={image} alt={name} />
      <h2>{gender}</h2>
    </div>
  );
};

export default Card;
