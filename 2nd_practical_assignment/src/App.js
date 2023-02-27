import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"


const URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

function Cocktail() {
  const [cocktail, setCocktail] = useState({});

  useEffect(() => {
    async function fetchData() {

      const response = await axios.get(URL);

      setCocktail(response.data.drinks[0]);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>{cocktail.strDrink}</h1>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />


      <h3>Instructions:</h3>
      <p class="instructions">{cocktail.strInstructions}</p>

        {/* Paikat jokaiselle mahdolliselle ainesosalle: */}

      <h3>Ingredients:</h3>
    
      <ol class="ingredients">
        <p>{cocktail.strIngredient1} {cocktail.strMeasure1}</p>
        <p>{cocktail.strIngredient2} {cocktail.strMeasure2}</p>
        <p>{cocktail.strIngredient3} {cocktail.strMeasure3}</p>
        <p>{cocktail.strIngredient4} {cocktail.strMeasure4}</p>
        <p>{cocktail.strIngredient5} {cocktail.strMeasure5}</p>
        <p>{cocktail.strIngredient6} {cocktail.strMeasure6}</p>
        <p>{cocktail.strIngredient7} {cocktail.strMeasure7}</p>
        <p>{cocktail.strIngredient8} {cocktail.strMeasure8}</p>
        <p>{cocktail.strIngredient9} {cocktail.strMeasure9}</p>
        <p>{cocktail.strIngredient10} {cocktail.strMeasure10}</p>
        <p>{cocktail.strIngredient11} {cocktail.strMeasure11}</p>
        <p>{cocktail.strIngredient12} {cocktail.strMeasure12}</p>
        <p>{cocktail.strIngredient13} {cocktail.strMeasure13}</p>
        <p>{cocktail.strIngredient14} {cocktail.strMeasure14}</p>
        <p>{cocktail.strIngredient15} {cocktail.strMeasure15}</p>
      </ol>

    </div>
  );
}

export default Cocktail;
