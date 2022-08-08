import React from 'react'
import { useCocktailContext } from '../context'

const SearchForm = () => {
  let { cocktails, setCocktails } = useCocktailContext();
  return (
    <>
        <section className="section search">
          <form className="search-form">
            <div className="form-control">
              <label htmlFor="name">search your favorite cocktail</label>
              <input 
              onChange={(e) => {
                setCocktails(prev => {
                  return {
                    ...prev,
                    searchItem : e.target.value,  
                    searching : !prev.searching,  // to fire effect
                    loading : true // to show animation
                  }
                })
              }}
              type="text"  
              value={ cocktails.searchItem }
              />

            </div>
          </form>
        </section>    
    </>
  )
}

export default SearchForm
