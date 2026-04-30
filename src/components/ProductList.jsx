import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({filter, handleAddToCart}) => {

  const filteredGoods = filter === 'all' ? sampleProducts : sampleProducts.filter(good => good.category===filter)
  return (
    <div>
      <h2>Available Products</h2>

      {/* TODO: Filter sample data using selected category */}
      {filteredGoods.length > 0 ? (
      filteredGoods.map((product) => (
        <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart}/>
      ))
    ) : (
      <p>No Products available</p>
    )}
    </div>
  )
}

export default ProductList
