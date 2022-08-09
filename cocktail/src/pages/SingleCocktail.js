import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link, Outlet } from 'react-router-dom'
import { useCocktailContext } from '../context'

let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`


const SingleCocktail = () => {
  
  let {drinkId} = useParams();

  let {cocktails, setCocktails} = useCocktailContext();

  let drink = cocktails.singleCocktail[0]

  useEffect(
    () => {
        let drinkUrl = `${url}${drinkId}`;
        fetch(drinkUrl)
        .then(response => response.json())
        .then(data => {
          setCocktails(prev => {
            return {
              ...prev, 
              loading : false,
              singleCocktail : data.drinks
            }
          })
        })
        
    }
  , [])

  if(cocktails.loading) return <Loading />
  else
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">back home</Link>
      <h2 className="section-title">{drink.strDrink || ""}</h2>
      <div className="drink"><img src={drink.strDrinkThumb} alt={drink.strDrink || ""} />
        <div className="drink-info">
          <p><span className="drink-data">name :</span>{drink.strDrink} </p>
          <p><span className="drink-data">category :</span>{drink.strCategory} </p>
          <p><span className="drink-data">info :</span>{drink.strAlcoholic} </p>
          <p><span className="drink-data">glass :</span>{drink.strGlass} </p>
          <p><span className="drink-data">instructons :</span>{drink.strInstructions} </p>
          <p><span className="drink-data">ingredients :</span>
            <span>{drink.strIngredient1} </span>
            <span>{drink.strIngredient2} </span>
            <span>{drink.strIngredient3} </span>
            <span>{drink.strIngredient4} </span>
          </p>
        </div></div>

      <Outlet />
    </section>
  )
  // }

}

export default SingleCocktail
