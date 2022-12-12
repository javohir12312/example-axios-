import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Inner from './components/Inner/Inner'
import NotFound from './components/NotFound/NotFound'
import Products from './Products/Products'

const App = () => {
  return (
    <div className='container'>
    <Header navArr={['ALL PRODUCTS', 'ABOUT SEEDRA','OUR BLOG','CONTACTS']}/>
      <Routes>
        <Route path='/'element={<Home data={"https://fakestoreapi.com/products/"}/>}/>
        <Route path='/ALL PRODUCTS' element={<Products/>}/>
        <Route path={`/:id`} element={<Inner/>}/>
        <Route path='*'element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App