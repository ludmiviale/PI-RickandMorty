import { useState } from "react";
/* styles */
import "../nav/nav.css";

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleRandom = () => {
    setId(Math.round(Math.random() * 826));
  };

  return (
    <div className="searchBar">
      <input type="search" value={id} onChange={handleChange} />

      <button onClick={() => onSearch(id, setId(""))} className="btn">
        Add
      </button>

      <button onClick={handleRandom} className="btn-random"></button>
    </div>
  );
};

export default SearchBar;
