import Spinner from '../Spinner';
import WelcomeMessage from './WelcomeMessage';
import Recipe from './Recipe';

const RecipeContainer = ({
  recipe,
  isLoading,
  welcome,
  onBookmarked,
  bookedId,
}) => {
  return (
    <div className="recipe">
      {welcome && <WelcomeMessage />}
      {/* <ErrorMessage /> */}

      {isLoading && <Spinner />}

      {!isLoading && !welcome && (
        <Recipe
          recipe={recipe.recipe}
          onBookmarked={onBookmarked}
          bookedId={bookedId}
        />
      )}
    </div>
  );
};

export default RecipeContainer;
