import React from 'react'
import { ProductCard } from '../ProductCard/ProductCard'

export const ProductList = (props) => {
    const products = props.dataproduct2
  return (
    <div className='ProductCard'  >
 {products.map((product) => (
        <ProductCard product={product}  />
      ))}
    </div>
  )
}

