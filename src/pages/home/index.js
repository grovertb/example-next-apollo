import React from 'react'

import { useGetProducts } from '../../apollo/cart/hooks'

import { useDebounce } from '../../lib'

import { CartContent, CartDetailContent, CartEmpty, CartDetail, CartDetailItem, CartListContent, CartContentInput } from '../../components/Home/Cart'
import Main from '../../components/Layouts/Main'
import Input from '../../components/Common/Input'
import Button from '../../components/Common/Button'
import Typography from '../../components/Common/Typography'
import CartList from '../../components/Home/CartList'

const Cart = () => {
  const [ search, setSearch ] = React.useState(null)
  const [ products, getProducts ] = useGetProducts()

  const _handleChangeSearch = ev => {
    setSearch(ev.target.value)
  }

  const debounceSearch = useDebounce(search, 500)

  React.useEffect(() => {
    if(debounceSearch !== null) getProducts({ variables: { search: debounceSearch } })
  }, [ debounceSearch ])

  return (
    <Main>
      <CartContent>
        <CartContentInput>
          <Input fullWidth type='text' value={search} onChange={_handleChangeSearch} placeholder='Search Products' />
        </CartContentInput>
        <CartListContent>
          {
            products.length ? (
              <CartList products={products} />
            ) : (
              <CartEmpty>
                {'Your cart is empty Seems like you haven\'t chosen what to buy'}
              </CartEmpty>
            )
          }
        </CartListContent>
      </CartContent>
      <CartDetailContent>
        <Typography>Buy now and get it by 05/24/19</Typography>
        <CartDetail>
          <CartDetailItem>
            <div>Products:</div>
            <div>$0.00</div>
          </CartDetailItem>
          <CartDetailItem actived>
            <div>Shipping Cost:</div>
            <div>$0.00</div>
          </CartDetailItem>
          <CartDetailItem>
            <div>Taxes:</div>
            <div>$0.00</div>
          </CartDetailItem>
          <CartDetailItem>
            <div>Total:</div>
            <div>$0.00</div>
          </CartDetailItem>
        </CartDetail>
        <Button fullWidth >COMPLETE ORDER</Button>
      </CartDetailContent>
    </Main>
  )
}

export default Cart
