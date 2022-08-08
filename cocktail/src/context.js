import React, { useState, useContext, useEffect, createContext } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

// create context to manage data
let Context = createContext();

// generate context provider
let CocktailProvider = ({ children }) => {
    let [cocktails, setCocktails] = useState({
          loading : true,
          allCocktails : [],
          singleCocktail : [],
          searchItem : "",
          searching : false,
          searchResult : true
    });
     
    useEffect(
      () => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
          setCocktails(prev => {
              return {
                ...prev,
                loading : false,
                allCocktails : data.drinks,
                searchResult : true
              }  
          })
        })
        .catch(err => 'Error ' + err.message);
      }
    , []);


    useEffect(
      () => {
        
        let searchUrl = `${url}${cocktails.searchItem}`;
        fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
          if(!data.drinks) {
              setCocktails(prev => {
                return {
                  ...prev,
                  loading : false,
                  searchResult : false
                }
              })
          }else {
              setCocktails(prev => {
                return {
                  ...prev,
                  loading : false,
                  searchResult : true,
                  allCocktails : data.drinks
                }
              })
          }   
        })
      }
    , [ cocktails.searching ])

    
    return (
          <Context.Provider value={{
            cocktails,
            setCocktails
          }} >
              {children}
          </Context.Provider>
      )
}

// custom hook to consume context where needed.
let useCocktailContext = () => {
  return useContext(Context);
}

export {CocktailProvider, useCocktailContext}
