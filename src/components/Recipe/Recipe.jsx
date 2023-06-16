import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import GroupIcon from '@mui/icons-material/Group';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useState } from 'react';

const Recipe = ({ recipe, onBookmarked, bookedId }) => {
  const [serving, setServing] = useState(recipe.servings);

  const bookedbtn = bookedId?.map((book) => book).includes(recipe.id);

  return (
    <>
      <figure className="recipe__fig">
        <img
          src={recipe.image_url}
          alt={recipe.title}
          className="recipe__img"
        />
        <h1 className="recipe__title">
          <span>{recipe.title}</span>
        </h1>
      </figure>

      <div className="recipe__details">
        <div className="recipe__info">
          <AccessTimeOutlinedIcon className="recipe__info-icon" />

          <span className="recipe__info-data recipe__info-data--minutes">
            {Math.floor(Number((recipe.cooking_time * serving) / 10))}
          </span>
          <span className="recipe__info-text">minutes</span>
        </div>
        <div className="recipe__info">
          <GroupIcon className="recipe__info-icon" />

          <span className="recipe__info-data recipe__info-data--people">
            {serving}
          </span>
          <span className="recipe__info-text">servings</span>

          <div className="recipe__info-buttons">
            <button className="btn--tiny btn--increase-servings">
              <RemoveCircleOutlineOutlinedIcon
                onClick={() =>
                  setServing((cur) => (cur >= 1 ? cur - 1 : 0))
                }
              />
            </button>
            <button className="btn--tiny btn--increase-servings">
              <ControlPointOutlinedIcon
                onClick={() => setServing((cur) => cur + 1)}
              />
            </button>
          </div>
        </div>

        <div
          className="recipe__user-generated"
          style={{ cursor: 'pointer' }}
        >
          <PersonOutlineOutlinedIcon />
        </div>
        <button
          className="btn--round"
          onClick={() => onBookmarked(recipe)}
          style={{ color: bookedbtn ? '#a3a3a3' : '#ffffff' }}
        >
          <BookmarkBorderOutlinedIcon className="booked" />
        </button>
      </div>

      <div className="recipe__ingredients">
        <h2 className="heading--2">Recipe ingredients</h2>
        <ul className="recipe__ingredient-list">
          {recipe.ingredients.map((ing, i) => {
            return (
              <li className="recipe__ingredient" key={i}>
                <CheckOutlinedIcon className="recipe__ingredient--correct" />
                <div className="recipe__quantity">
                  {ing.quantity}g
                </div>
                <div className="recipe__description">
                  {/* <span className="recipe__unit"></span> */}
                  {ing.description}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="recipe__directions">
        <h2 className="heading--2">How to cook it</h2>
        <p className="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span className="recipe__publisher">The Pioneer Woman</span>
          . Please check out directions at their website.
        </p>
        <a
          className="btn--small recipe__btn"
          href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
          //   target="_blank"
        >
          <span>Directions</span>
          <ArrowForwardOutlinedIcon className="arrowPagination" />
        </a>
      </div>
    </>
  );
};

export default Recipe;
