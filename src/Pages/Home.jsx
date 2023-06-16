import { useState, useEffect } from 'react';
import Navbar from '../components/NavBar/Navbar';
import Results from '../components/SearchResult/Results';
import RecipeContainer from '../components/Recipe/RecipeContainer';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [isLoadingLists, setIsLoadingLists] = useState(false);
  const [increase, setIncrease] = useState(1);
  const [startIncrease, setStartIncrease] = useState(0);
  const [curListClicked, setCurListClicked] = useState(null);
  const [recipe, setRecipe] = useState({});
  const [isLoadingList, setIsLoadingList] = useState(false);
  const [welcome, setWelcome] = useState(true);
  const [booked, setBooked] = useState(() => {
    return JSON.parse(localStorage.getItem('forkify-booked')) || [];
  });
  const [bookedId, setBookedId] = useState([]);

  const end = 10;

  let curRecipes = recipes.slice(
    `${startIncrease}`,
    `${end * increase}`
  );

  function handlePreviousRecipes() {
    setIncrease((increase) => increase - 1);
    setStartIncrease((startIncrease) => startIncrease - 10);
  }

  function handleForwardRecipes() {
    setIncrease((increase) => increase + 1);
    setStartIncrease((startIncrease) => startIncrease + 10);
  }

  function handleListClick(id) {
    setCurListClicked((cur) => (cur === id ? null : id));
  }

  useEffect(() => {
    if (!recipes || !curListClicked) return;

    const curList = recipes.find(
      (recipe) => recipe.id === curListClicked
    );
    document.title = `React forkify || ${curList?.title}`;
  }, [curListClicked, recipes]);

  function handleBookmarked(bookedId) {
    // DOES OBJECT EXIST IN THE ARRAY BEFORE ADDING
    const newBook = booked.find((book) => book.id === bookedId.id);

    if (newBook) return;

    setBooked((book) => [...book, bookedId]);
    setBookedId((id) => [...id, bookedId.id]);
  }

  useEffect(() => {
    localStorage.setItem('forkify-booked', JSON.stringify(booked));
  }, [booked]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setIsLoadingLists(true);
        setError(false);
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
        );
        const data = await res.json();

        setIsLoadingLists(false);

        setRecipes(data.data.recipes);
      } catch (err) {
        if (err) {
          setError('Please check your network connection 📛');
        }
      } finally {
        setIsLoadingLists(false);
      }
    };

    if (!query) return;

    fetchRecipes();
  }, [query]);

  useEffect(() => {
    const fetchList = async () => {
      setIsLoadingList(true);
      setWelcome(false);
      setQuery('');

      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${curListClicked}`
      );

      const data = await res.json();
      setRecipe(data.data);

      setIsLoadingList(false);
    };

    if (!curListClicked) return;

    fetchList();
  }, [curListClicked]);

  // useEffect(() => {
  //   if (query.length > 0) {
  //     setRecipe([]);
  //     curRecipes = [];
  //   }
  // }, [query]);

  return (
    <div className="container">
      <Navbar
        query={query}
        setQuery={setQuery}
        recipeLength={recipes.length}
        booked={booked}
        onBookedClicked={handleListClick}
      />
      <Results
        recipeLength={recipes.length}
        startIncrease={startIncrease}
        recipes={curRecipes}
        isLoading={isLoadingLists}
        onPrevRecipes={handlePreviousRecipes}
        onForwardRecipes={handleForwardRecipes}
        increase={increase}
        onListClick={handleListClick}
      />
      <RecipeContainer
        recipe={recipe}
        isLoading={isLoadingList}
        welcome={welcome}
        onBookmarked={handleBookmarked}
        bookedId={bookedId}
      />
    </div>
  );
};

export default Home;
