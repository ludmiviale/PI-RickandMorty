import Cards from "../cards/Cards";
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import Select from "../select/Select";
/* styles */
import "./favorites.css";

const Favorites = () => {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const handleChange = (event) => {
    if (event.target.name === "filter") {
      dispatch(filterCards(event.target.value));
    } else {
      dispatch(orderCards(event.target.value));
    }
  };

  return (
    <div>
      <div className="select">
        <Select
          name="order"
          values={["Ascendente", "Descendente"]}
          handleChange={handleChange}
        />
        <Select
          name="filter"
          values={["Todos", "Male", "Female", "Genderless", "unknown"]}
          handleChange={handleChange}
        />
      </div>
      <Cards characters={myFavorites} />
    </div>
  );
};

export default Favorites;
