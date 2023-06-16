import React from 'react';
import ResultList from './ResultList';

const Result = ({ recipes, onListClick }) => {
  return (
    <ul className="results">
      {recipes.map((recipe) => (
        <ResultList
          key={recipe.id}
          recipe={recipe}
          onListClick={onListClick}
        />
      ))}
    </ul>
  );
};

export default Result;
