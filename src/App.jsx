import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
const [isDark, setIsDark] = useState(false)

const[cart, setCart] = useState([])

function handleAdd(products) {
  setCart([...cart, products])
}

  const[filter, setFilter] = useState('all')

  return (
    <div className={isDark ? "app dark-mode" : "app"}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

   <DarkModeToggle isDark={isDark} setIsDark={setIsDark} />

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList filter = {filter} handleAddToCart ={handleAdd}/>

      {cart.length > 0 && <Cart cartItems={cart} />}
    </div>
  )
}

export default App
