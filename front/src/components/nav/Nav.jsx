import SearchBar from "../searchbar/SearchBar";
import { Link } from "react-router-dom";
import imageHome from "../../assets/home.png";
import imageLogout from "../../assets/logout.png";
/* styles */
import "./nav.css";

const Nav = ({ onSearch, logout }) => {
  return (
    <nav className="navBar">
      <img src={imageHome} alt="Morty" />
      <Link to="/home">
        <button className="btn-nav">Home</button>
      </Link>
      <Link to="/favorites">
        <button className="btn-nav">Favorites</button>
      </Link>
      <Link to="/about">
        <button className="btn-nav"> About</button>
      </Link>
      {location.pathname === "/home" && <SearchBar onSearch={onSearch} />}
      <Link to="/">
        <button onClick={logout} className="btn-logout">
          Log out
        </button>
      </Link>
      <img src={imageLogout} alt="Morty" />
    </nav>
  );
};

export default Nav;
