import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const Pagination = ({
  onPrevRecipes,
  onForwardRecipes,
  increase,
  recipeLength,
  startIncrease,
}) => {
  const lastBtn =
    Math.floor(recipeLength / 10) === Math.floor(startIncrease / 10);

  return (
    <div className="pagination">
      {increase === 1 ? (
        ''
      ) : (
        <button
          className="btn--inline pagination__btn--prev"
          onClick={onPrevRecipes}
        >
          <ArrowBackOutlinedIcon className="arrowPagination" />
          <span>Page {increase - 1}</span>
        </button>
      )}

      {!lastBtn && (
        <button
          className="btn--inline pagination__btn--next"
          onClick={onForwardRecipes}
        >
          <span>Page {increase + 1}</span>
          <ArrowForwardOutlinedIcon className="arrowPagination" />
        </button>
      )}
    </div>
  );
};

export default Pagination;
