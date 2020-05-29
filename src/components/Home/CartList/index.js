import React from 'react'
import PropTypes from 'prop-types'
import { ProductPhoto, CartProductList, CartProductItem } from './styles'
import Button from '../../Common/Button'

const CartList = (props) => {
  const { products = [] } = props

  console.log('Grover: CartList -> products', products)

  return (
    <CartProductList>
      {
        products.map(product => (
          <CartProductItem key={`product-${product.id}`}>
            <div>
              <ProductPhoto src={product.photo} alt={product.name} />
            </div>
            <div>
              <div>{product.name}</div>
              <div>${product.price.toFixed(2)}</div>
            </div>
            <div>
              <Button rounded width='40px' height='40px'>+</Button>
            </div>
          </CartProductItem>
        ))
      }
    </CartProductList>
  )
}

CartList.propTypes = {
  products: PropTypes.array
}

export default CartList
