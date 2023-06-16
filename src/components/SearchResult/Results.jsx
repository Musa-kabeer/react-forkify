import Spinner from '../Spinner';
import Copyright from './Copyright';
import Pagination from './Pagination';
import Result from './Result';

const Results = ({
  recipes,
  isLoading,
  onPrevRecipes,
  onForwardRecipes,
  increase,
  recipeLength,
  startIncrease,
  onListClick,
}) => {
  return (
    <div className="search-results">
      {isLoading ? (
        <Spinner />
      ) : (
        <Result
          recipes={recipes}
          recipeLength={recipeLength}
          onListClick={onListClick}
        />
      )}
      <Pagination
        recipeLength={recipeLength}
        startIncrease={startIncrease}
        onPrevRecipes={onPrevRecipes}
        onForwardRecipes={onForwardRecipes}
        increase={increase}
      />
      <Copyright />
    </div>
  );
};

export default Results;
