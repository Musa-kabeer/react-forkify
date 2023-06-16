import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

const ResultList = ({ recipe, onListClick }) => {
  return (
    <li className="preview" onClick={() => onListClick(recipe.id)}>
      <Link className="preview__link preview__link--active">
        <figure className="preview__fig">
          <img src={recipe.image_url} alt={recipe.title} />
        </figure>
        <div className="preview__data">
          <h4 className="preview__title">{recipe.title}</h4>
          <p className="preview__publisher">{recipe.publisher}</p>
          <div className="preview__user-generated">
            <PersonIcon />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ResultList;
