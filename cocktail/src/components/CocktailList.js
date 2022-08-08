import React from 'react';
import Loading from './Loading';
import { useCocktailContext } from '../context';
import { Link } from "react-router-dom";
import { v4 as key } from 'uuid';

const CocktailList = () => {
  let { cocktails, setCocktails } =  useCocktailContext();
 

  if(cocktails.loading) return <Loading />
  else
  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {
          cocktails.allCocktails.map(cocktail => (
            <article key={key()}>
              <div className='img-container'>
                <img src={cocktail.strDrinkThumb} alt={cocktail.strAlcoholic} />
              </div>
              <div className='cocktail-footer'>
                <h3>{cocktail.strDrink}</h3>
                <h4>{cocktail.strGlass}</h4>
                <p>{cocktail.strAlcoholic}</p>
                <Link to={`/drink/${cocktail.idDrink}`} className='btn btn-primary btn-details'
                onClick={() => {
                  setCocktails(prev => {
                    return {
                      ...prev,
                      loading : true
                    }
                  })
                }}
                 >details</Link>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )

  
}

export default CocktailList
