import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    const getDrinks = async () => {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const newCocktail = data.drinks.map((item) => {
            return {
              name: item.strDrink,
              img: item.strDrinkThumb,
              info: item.strAlcoholic,
              glass: item.strGlass,
              category: item.strCategory,
              instructions: item.strInstructions,
              ingredients: [
                item.strIngredient1,
                item.strIngredient2,
                item.strIngredient3,
                item.strIngredient4,
                item.strIngredient5,
              ],
            };
          });
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
      setLoading(false);
    };
    getDrinks();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>;
  }

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
      {cocktail.map((item, index) => {
        const { name, img, category, info, glass, instructions, ingredients } = item;
        return (
          <React.Fragment key={index}>
            <h2 className='section-title'>{name}</h2>
            <div className='drink'>
              <img src={img} alt={name} />
              <div className='drink-info'>
                <p>
                  <span className='drink-data'>name :</span> {name}
                </p>
                <p>
                  <span className='drink-data'>category :</span> {category}
                </p>
                <p>
                  <span className='drink-data'>info :</span> {info}
                </p>
                <p>
                  <span className='drink-data'>glass :</span> {glass}
                </p>
                <p>
                  <span className='drink-data'>instructons :</span> {instructions}
                </p>
                <p>
                  <span className='drink-data'>ingredients :</span>
                  {ingredients.map((item, index) => {
                    return item ? <span key={index}> {item}</span> : null;
                  })}
                </p>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default SingleCocktail;
