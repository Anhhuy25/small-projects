import React from 'react';
import { useGlobalContext } from '../components/project 2/context';
import Recipes from '../components/project 2/Recipes';

function Project2() {
  const { recipes, search, setSearch, searchData } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault()
    searchData();
    setSearch('')
  }
  return (
    <div className="App">
      <form>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
      <Recipes recipes={recipes} />
    </div>
  );
}

export default Project2;