import React from 'react'
import Navbar from './Navbar'
import Items from './Items'
import Products from "./data";

const App = () => {

  let [totalItems, setTotalItems] = React.useState(() => Products.length);
    
  return (
    <>
      <Navbar totalItems={totalItems}/>
      <Items setTotalItems={setTotalItems}/>     
    </>
      
  )
}

export default App
