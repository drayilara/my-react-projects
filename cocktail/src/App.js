import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import BadRequest from './pages/BadRequest'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/drink/:drinkId' element={<SingleCocktail />} />
        <Route path='*' element={<BadRequest />} />
      </Routes>
    </Router>
  )
}

export default App
