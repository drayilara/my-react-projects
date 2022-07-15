import React from 'react'
import Navbar from './Navbar'
import Items from './Items'
import { CartProvider } from "./Context";

const App = () => {
    
  return (
    <>
    <CartProvider>
            <Navbar />
            <Items />
    </CartProvider>
      
    </>
      
  )
}

export default App
