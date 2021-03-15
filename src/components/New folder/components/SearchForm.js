import React from "react";
import { useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const inputRef = useRef("");

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = () => {
    setSearchTerm(inputRef.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input type='text' id='name' ref={inputRef} onChange={handleChange} />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
