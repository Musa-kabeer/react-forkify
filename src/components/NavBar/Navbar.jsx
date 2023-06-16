import Logo from './Logo';
import NavList from './NavList';
import SearchBar from './SearchBar';

const Navbar = ({
  query,
  setQuery,
  recipeLength,
  booked,
  onBookedClicked,
  setRecipes,
}) => {
  return (
    <header className="header">
      <Logo />
      <SearchBar query={query} setQuery={setQuery} />
      <NavList
        recipeLength={recipeLength}
        booked={booked}
        onBookedClicked={onBookedClicked}
      />
    </header>
  );
};

export default Navbar;
