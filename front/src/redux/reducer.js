import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";

const initialState = {
  allFavorites: [],
  myFavorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allFavorites: action.payload,
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allFavorites: action.payload,
      };

    case FILTER:
      let filterByGender;
      if (action.payload === "Todos") {
        filterByGender = [...state.allFavorites];
      } else {
        filterByGender = [...state.allFavorites].filter(
          (favorite) => favorite.gender === action.payload
        );
      }
      return {
        ...state,
        myFavorites: filterByGender,
      };

    case ORDER:
      const favoritesOrdered =
        action.payload === "Ascendente"
          ? [...state.myFavorites].sort((a, b) => a.id - b.id)
          : [...state.myFavorites].sort((a, b) => b.id - a.id);
      return {
        ...state,
        myFavorites: favoritesOrdered,
      };

    default:
      return { ...state };
  }
};

export default reducer;
