import React from 'react'
import './Product.css'

const Product = ({ product }) => {
  return (
    <div class='card'>
      <img src={product.image} alt='Avatar' />
      <div class='container'>
        <p className='name'>{product.name}</p>

        <p className='actualprice'>&#8377;{product.price}</p>
        <p className='cutprice'>{product.price + 500}</p>
      </div>
    </div>
  )
}

export default Product
