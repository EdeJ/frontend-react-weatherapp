import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ setLocationHandler }) {

  const [query, setQuery] = useState('');

  function onClick() {
    setLocationHandler(query);
  }
  function keyPressCheck(e) {
    if (e.keyCode === 13) {
      setLocationHandler(query)
    }
  }

  return (
    <span className="searchbar">
      <input
        type="text"
        name="search"
        placeholder="Zoek een stad in Nederland"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyUp={keyPressCheck}
      />

      <button type="button" onClick={onClick}>
        Zoek
      </button>
    </span>
  );
};

export default SearchBar;
