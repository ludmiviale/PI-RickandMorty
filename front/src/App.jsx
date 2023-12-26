import "./index.css";
/* components to render */
import About from "./components/about/About";
import Cards from "./components/cards/Cards";
import Detail from "./components/detail/Detail";
import Favorites from "./components/favorites/Favorites";
import Form from "./components/form/Form";
import Nav from "./components/nav/Nav";
/* hooks */
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFav } from "./redux/actions";
/* dependencies */
import axios from "axios";
const URL = "http://localhost:3001/rickandmorty/login/";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation(); // retorna un objeto
  const [access, setAccess] = useState(false);
  const navigate = useNavigate(); // retorna una función
  const dispatch = useDispatch();

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const { data } = await axios(
        `${URL}?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      throw Error(error.message);
    }
  };

  const allFavorites = useSelector((state) => state.allFavorites);

  useEffect(() => {
    !access && navigate("/");
    allFavorites.forEach((char) => {
      dispatch(removeFav(char.id));
    });
  }, [access]);

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  const onSearch = async (id) => {
    let usedChars = [...characters];
    let ids = usedChars.map((char) => char.id);

    if (!ids.includes(Number(id))) {
      try {
        const character = (
          await axios(`http://localhost:3001/rickandmorty/character/${id}`)
        ).data;
        if (character.id) {
          setCharacters((oldChars) => [...oldChars, character]);
        } else {
          alert("¡No hay personajes con este ID!");
        }
      } catch (error) {
        throw Error(error.message);
      }
    } else {
      alert("Ya se agregó el personaje");
    }
  };

  const onClose = (id) => {
    const idFiltered = characters.filter((character) => {
      return character.id !== id;
    });
    setCharacters(idFiltered);
    dispatch(removeFav(id));
  };

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
