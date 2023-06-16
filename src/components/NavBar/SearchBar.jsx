import { useEffect, useRef } from 'react';

const SearchBar = ({ query, setQuery }) => {
  const input = useRef(null);

  useEffect(() => {
    if (document.activeElement === input) return;

    input.current.focus();
  }, [input]);

  return (
    <form className="search">
      <input
        ref={input}
        type="text"
        className="search__field"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search over 1,000,000 recipes..."
      />

      {/* <button className="btn search__btn">
        <SearchOutlinedIcon className="nav_icons" />
        <span>Search</span>
      </button> */}
    </form>
  );
};

export default SearchBar;
<li className="nav__item" style={{ textAlign: 'center' }}></li>;
