import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";
import axios from "axios";

const URL_BASE = "http://localhost:3001/rickandmorty/fav/";

export const addFav = (character) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(URL_BASE, character);
      return dispatch({ type: ADD_FAV, payload: data });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const removeFav = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${URL_BASE}${id}`);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};
