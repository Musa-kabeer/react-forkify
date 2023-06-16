import AddRecipe from './AddRecipe';
import Bookmarks from './Bookmarks';

const NavList = ({ recipeLength, booked, onBookedClicked }) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <AddRecipe recipeLength={recipeLength} />
        <Bookmarks
          booked={booked}
          onBookedClicked={onBookedClicked}
        />
      </ul>
    </nav>
  );
};

export default NavList;
