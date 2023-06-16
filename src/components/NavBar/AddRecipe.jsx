const AddRecipe = ({ recipeLength }) => {
  return (
    <li className="nav__item">
      <button className="nav__btn">
        <span> Recipes Found: {recipeLength}</span>
      </button>
    </li>
  );
};

export default AddRecipe;
