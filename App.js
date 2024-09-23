import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import './App.css'
import RecipeId from './Component/RecipeId'
import Category from './Component/Category'
import SearchElement from './Component/SearchElement'

const App = () => {
  return (
  <>
  <Router>  
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/:idMeal' element={ <RecipeId />} />
      <Route path='/category/:name' element={ <Category />} />
      <Route path='/search/:searchTerm' element={ <SearchElement />} />
    </Routes>
  </Router>
 
  </>
  )
}

export default App
