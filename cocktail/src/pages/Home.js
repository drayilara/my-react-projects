import React from 'react'
import Navbar from '../components/Navbar'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import Error from './Error'
import { useCocktailContext } from '../context'

const Home = () => {
  let { cocktails } = useCocktailContext();
  return (
    <>
      <Navbar />
      <main>
        <SearchForm />
        { cocktails.searchResult ? <CocktailList /> : <Error /> }
      </main>
    </>
  )
}

export default Home
